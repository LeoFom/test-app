import { Alert, Card, Typography } from "antd";

import { CoinsTable } from "../components/tables/CoinsTable";
import { useCoins } from "../hooks/useCoins";

export default function CoinsPage() {
  const {
    data = [],
    isLoading,
    isError,
  } = useCoins();

  if (isError) {
    return (
      <Alert
        type="error"
        message="Failed to load coins data"
        showIcon
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Typography.Title level={2}>
          Top Cryptocurrencies
        </Typography.Title>

        <Typography.Text type="secondary">
          Top 50 coins by market capitalization
        </Typography.Text>
      </div>

      <Card
        className="
          flex-1 overflow-hidden flex flex-col min-h-0 shadow-sm
        "
      >
        <CoinsTable
          data={data}
          loading={isLoading}
        />
      </Card>
    </div>
  );
}