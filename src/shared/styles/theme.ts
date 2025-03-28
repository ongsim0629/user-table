import { tokens } from './tokens';

export const theme = {
  tokens,

  layout: {
    backgroundColor: tokens.color.bgContainer,
    typography: {
      fontFamily: tokens.font.family,
    },
    header: {
      background: tokens.color.bgContainer,
      padding: '8px 14px',
      borderBottom: `1px solid ${tokens.color.split}`,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerInner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
    title: {
      margin: 0,
      fontFamily: tokens.font.family,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '24px',
      color: tokens.color.text,
    },
    addButton: {
      height: 32,
      padding: '0 8px',
      gap: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  form: {
    layout: 'vertical' as const,
    item: {
      marginBottom: 20,
    },
  },

  modal: {
    width: 520,
    height: 686,
    borderRadius: tokens.radius.md,
    header: {
      width: '100%',
      height: 46,
      gap: 10,
      paddingTop: 8,
      paddingRight: 16,
      paddingBottom: 8,
      paddingLeft: 16,
      borderBottom: `1px solid ${tokens.color.split}`,
      title: {
        fontFamily: tokens.font.family,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '22px',
        letterSpacing: 0,
      },
      closeButton: {
        width: 22,
        height: 22,
        borderRadius: tokens.radius.sm,
      },
    },
    body: {
      width: '100%',
      padding: '0px 20px',
      boxSizing: 'border-box' as const,
    },
    footer: {
      width: '100%',
      padding: '8px 16px',
      paddingTop: 16,
      borderTop: `1px solid ${tokens.color.split}`,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
    },
    formWrapper: {
      width: '100%',
      padding: 0,
    },
  },

  datepicker: {
    width: 200,
  },

  dropdown: {
    width: 181,
    height: 80,
    padding: '8px',
    borderRadius: tokens.radius.md,
    icon: {
      base: {
        cursor: 'pointer',
        fontSize: 18,
        padding: 6,
        borderRadius: tokens.radius.md,
        transition: 'all 0.2s',
      },
      hover: {
        backgroundColor: '#0000000F',
      },
      active: {
        backgroundColor: '#0000000F',
      },
      disabled: {
        color: '#0000000F',
        cursor: 'not-allowed',
      },
    },
    delete: {
      color: 'red',
    },
  },

  select: {
    default: {
      width: 85,
      height: 32,
      borderRadius: tokens.radius.sm,
      fontSize: tokens.font.size,
    },
    dropdown: {
      minWidth: '198px',
      backgroundColor: '#ffffff',
      color: tokens.color.primary,
      borderRadius: tokens.radius.md,
    },
    option: {
      default: {
        padding: '8px 12px',
        fontSize: tokens.font.size,
      },
      hover: {
        backgroundColor: '#f5f5f5',
        color: tokens.color.primary,
      },
      selected: {
        backgroundColor: tokens.color.tableChecked,
        color: tokens.color.primary,
      },
    },
    arrow: {
      hover: {
        color: tokens.color.primary,
      },
    },
  },

  table: {
    size: 'small' as const,
    bordered: false,
    pagination: false as const,
    rowSelection: {
      columnWidth: 32,
    },
    checkbox: {
      size: 18,
      backgroundColor: '#ffffff',
      checkedColor: '#1a73e8',
      disabled: false,
    },
    style: {
      marginTop: 0,
    },
    rowControl: {
      borderRight: `1px solid ${tokens.color.split}`,
      borderBottom: `1px solid ${tokens.color.split}`,
      borderLeft: `1px solid ${tokens.color.split}`,
    },
    columns: {
      selection: { width: 32 },
      name: { width: '10%' },
      address: { width: '20%' },
      memo: { width: '20%' },
      joinDate: { width: '16%' },
      job: { width: '20%' },
      email: { width: '12%' },
      actions: { width: 48 },
    },
    cellStyle: {
      padding: '8px 12px',
      borderBottom: '1px solid #f0f0f0',
    },
  },
};
