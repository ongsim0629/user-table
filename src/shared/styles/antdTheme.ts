import { ThemeConfig } from 'antd/es/config-provider/context';
import { theme as localTheme } from './theme';

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: localTheme.tokens.color.primary,
    fontFamily: localTheme.tokens.font.family,
    borderRadius: localTheme.tokens.radius.sm,
  },
  components: {
    Select: {
      optionSelectedBg: localTheme.tokens.color.tableChecked,
    },
    Checkbox: {
      borderRadius: localTheme.tokens.radius.sm,
    },
  },
};

export default antdTheme;
