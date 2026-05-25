import { Avatar, Table, Tag, Typography } from "antd";

import { formatCompactNumber } from "../../utils/formatCompactNumber";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatPercent } from "../../utils/formatPercent";

export function CoinsTable({
  data = [],
  loading = false,
  pagination = false,
  onChange,
}) {

  const columns = [
    {
      title: "#",
      dataIndex: "market_cap_rank",
      key: "rank",
      width: 80,
      fixed: "left",

      sorter: (a, b) =>
        a.market_cap_rank - b.market_cap_rank,
    },

    {
      title: "Coin",
      key: "coin",
      width: 260,
      fixed: "left",

      render: (_, coin) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={coin.image}
            size={32}
          />

          <div className="flex flex-col">
            <Typography.Text strong>
              {coin.name}
            </Typography.Text>

            <Typography.Text type="secondary">
              {coin.symbol.toUpperCase()}
            </Typography.Text>
          </div>
        </div>
      ),
    },

    {
      title: "Price",
      dataIndex: "current_price",
      key: "price",
      width: 180,

      sorter: (a, b) =>
        a.current_price - b.current_price,

      render: (value) => formatCurrency(value),
    },

    {
      title: "24h %",
      dataIndex: "price_change_percentage_24h",
      key: "change24h",
      width: 160,

      sorter: (a, b) =>
        a.price_change_percentage_24h -
        b.price_change_percentage_24h,

      render: (value) => {
        const isPositive = value >= 0;

        return (
          <Tag
            color={isPositive ? "success" : "error"}
          >
            {formatPercent(value)}
          </Tag>
        );
      },
    },

    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "marketCap",
      width: 180,

      sorter: (a, b) =>
        a.market_cap - b.market_cap,

      render: (value) =>
        formatCompactNumber(value),
    },

    {
      title: "Volume 24h",
      dataIndex: "total_volume",
      key: "volume",
      width: 180,

      sorter: (a, b) =>
        a.total_volume - b.total_volume,

      render: (value) =>
        formatCompactNumber(value),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      onChange={onChange}
      scroll={{
        x: 1100,
        y: 500,
      }}
      sticky
    />
  );
}