var chalk = require('chalk');

module.exports.AlpineTest = function AlpineTest(testDescription) {
  return {
    mName: testDescription.name,
    mFinish: undefined,
    mRunCommand: undefined,
    mListenAssert: undefined,
    mInstruction: undefined,
    mInstructions: testDescription.instructions,
    mCurrentInst: 0,
    mResult: 'fail',

    checkResult: function checkResult(result) {
      if ('pass' == result) {
        this.pass();
        return true;
      }
      if ('fail' == result) {
        this.fail();
        return false;
      }

      console.log(chalk.red("Did not understand result! " + result));
      if(result === undefined){
        console.log("Unrecoverable error. Exiting...");
        console.log("Hint: an undefined response usually indicates a problem with the socket.");
        console.log("Make sure that the ws and wss protocols are enabled in the Content Security Policy");
        process.exit(1);
      }
      return false;
    },

    pass: function pass() {
      this.mInstructions[this.mCurrentInst - 1].result = 'pass';
    },

    fail: function fail() {
      console.log(chalk.red('\t\t' + this.mInstruction.name + " failed."));

      for (var i = this.mCurrentInst - 1; i < this.mInstructions.length; i++) {
        this.mInstructions[i].result = 'fail';
      }

      this.cleanUp();
      this.mResult = 'fail';
      this.mFinish('fail');
      this.mFinish = undefined;
    },

    onCommandDone: function onCommandDone(result) {
      var res = this.checkResult(result.result);
      if (res) {
        if (this.mInstruction.assertion) {
          if (result.type && result.type == 'cameraSetting') {
            this.mInstruction.assertion += result.value;
          }

          this.mListenAssert(this.mInstruction.assertion, this.mInstruction.timeout, this.onAssertDone);
        } else // If we dont have any assertion then just return pass
          this.onAssertDone('pass');
      }
    },

    onAssertDone: function onAssertDone(result) {
      this.checkResult(result);
      this.runInstruction();
    },

    runInstruction: function runInstruction() {
      if (!this.mRunCommand) { // Somehow we're getting rogue calls into here. Squash it
        return;
      }

      if (this.mCurrentInst < this.mInstructions.length) {
        this.mInstruction = this.mInstructions[this.mCurrentInst];
      } else {
        this.cleanUp();
        this.mResult = 'pass';
        this.mFinish('pass');
        this.mFinish = undefined;
      }

      if (!this.mInstruction) { // Somehow we're getting rogue calls into here. Squash it
        return;
      }

      console.log("\tRunning instruction " + (this.mCurrentInst + 1) + " of " + this.mInstructions.length + ": " + chalk.inverse(' ' + this.mInstruction.name + ' '));
      this.mCurrentInst++;

      if (this.mInstruction.command)
        this.mRunCommand(this.mInstruction.command, this.mInstruction.timeout, this.onCommandDone);
      else {
        this.onCommandDone({result: 'pass'});
      }
    },

    getName: function getName() {
      return this.mName;
    },

    run: function run(runCommand, listenAssert, finishCallback) {
      this.mFinish = finishCallback;
      this.mRunCommand = runCommand;
      this.mListenAssert = listenAssert;
      this.runInstruction();
    },

    cleanUp: function cleanUp() {
      this.mRunCommand = undefined;
      this.mListenAssert = undefined;
      this.mInstruction = undefined;
      this.mCurrentInst = undefined;
    }
  };
};
