import { useMemo, useState } from "react";

import {
  Alert,
  Button,
  Card,
  Flex,
  Segmented,
  Spin,
  Typography,
} from "antd";

import { ReloadOutlined } from "@ant-design/icons";

import { CoinPriceChart } from "../components/charts/CoinPriceChart";
import { COIN_OPTIONS } from "../constants/coins";
import { useCoinChart } from "../hooks/useCoinChart";

const chartDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export default function ChartPage() {
  const [coinId, setCoinId] = useState("bitcoin");

  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useCoinChart(coinId);

  const chartData = useMemo(() => {
    if (!data?.prices) {
      return [];
    }

    return data.prices.map(([timestamp, price]) => ({
      date: chartDateFormatter.format(new Date(timestamp)),
      price: Number(price.toFixed(2)),
    }));
  }, [data]);

  if (isError) {
    return (
      <Alert
        type="error"
        title="Failed to load chart data"
        showIcon
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Typography.Title level={2}>
          Coin Price Chart
        </Typography.Title>

        <Typography.Text type="secondary">
          Real-time chart updates every 15 seconds
        </Typography.Text>
      </div>

      <Card>
        <div className="flex flex-col gap-6">
          <Flex justify="space-between" align="center">
            <Segmented
              options={COIN_OPTIONS}
              value={coinId}
              onChange={setCoinId}
            />

            <Button
              type="primary"
              icon={<ReloadOutlined />}
              loading={isFetching && !isLoading}
              onClick={() => refetch()}
            >
              Refresh
            </Button>
          </Flex>

          {isFetching && !isLoading && (
            <Typography.Text type="secondary">
              Updating chart data...
            </Typography.Text>
          )}

          <Spin spinning={isLoading}>
            <CoinPriceChart data={chartData} />
          </Spin>
        </div>
      </Card>
    </div>
  );
}