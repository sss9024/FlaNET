import Blockly from "blockly";

export default function createTrainingPlus(args) {
  const plus = new Blockly.FieldImage(plusImage, 15, 15, undefined, onClick_);

  plus.args_ = args;
  return plus;
}

function onClick_(plusField) {
  const block = plusField.getSourceBlock();

  if (block.isInFlyout) {
    return;
  }

  Blockly.Events.setGroup(true);

  const oldMutationDom = block.mutationToDom();
  const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

  block.plus(plusField.args_);

  const newMutationDom = block.mutationToDom();
  const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

  if (oldMutation !== newMutation) {
    Blockly.Events.fire(
      new Blockly.Events.BlockChange(
        block,
        "mutation",
        null,
        oldMutation,
        newMutation
      )
    );
  }
  Blockly.Events.setGroup(false);
}

const plusImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC" +
  "9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT" +
  "ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz" +
  "FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW" +
  "MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS" +
  "44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";
