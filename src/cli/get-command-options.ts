import type { Option } from "yargs-interactive";

const defaultOptions: Option = {
  interactive: { describe: "Use interactive mode", default: true },
};

/**
 * Check current options and decide what to do.
 * If there is a missing property, run interactive mode
 * using the other properties as default values
 * @param commandOptions
 */
function getCommandOptions(commandOptions: Option): Option {
  return {
    ...defaultOptions,
    ...commandOptions,
  };
}

export default getCommandOptions;
