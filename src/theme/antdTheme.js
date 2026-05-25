export const antdTheme = {
  token: {
    colorPrimary: "#2563eb",
    borderRadius: 12,

    colorBgLayout: "#f5f7fb",
    colorBgContainer: "#ffffff",

    colorText: "#111827",
    colorTextSecondary: "#6b7280",

    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 40,
      fontWeight: 500,
    },

    Table: {
      headerBg: "#111827",
      headerColor: "#ffffff",

      rowHoverBg: "#eff6ff",

      cellPaddingBlock: 14,
      cellPaddingInline: 16,

      borderColor: "#e5e7eb",
    },

    Card: {
      borderRadiusLG: 20,
    },

    Input: {
      controlHeight: 42,
    },

    Select: {
      controlHeight: 42,
    },
  },
};