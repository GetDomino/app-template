import { IRunContext } from "@domino-sdk/core";

export default function(context: IRunContext) {
  // context.input is the input data passed to the action
  return {
    result: 'Hello world!'
  }
}