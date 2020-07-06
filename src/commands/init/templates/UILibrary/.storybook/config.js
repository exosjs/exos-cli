import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import "./_global.css";

addDecorator(withKnobs);
addDecorator(withA11y);
