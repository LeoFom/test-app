import { useState } from "react";

import {
  Alert,
  Card,
  Typography,
} from "antd";

import { CoinsTable } from "../components/tables/CoinsTable";
import { useCoinsPaged } from "../hooks/useCoinsPaged";

const PAGE_SIZE = 20;
const TOTAL_ITEMS = 400;

export default function CoinsPagedPage() {
  const [page, setPage] = useState(1);

  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useCoinsPaged(page);

  if (isError) {
    return (
      <div className="w-full">
        <Alert
          type="error"
          title="Failed to load paged coins data"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Typography.Title level={2}>
          Paginated Coins
        </Typography.Title>

        <Typography.Text type="secondary">
          Server-side pagination with Tanstack React Query
        </Typography.Text>
      </div>

      <Card
        className="
          relative
          flex-1 overflow-hidden flex flex-col min-h-0 shadow-sm
        "
      >
        <CoinsTable
          data={data}
          loading={isLoading}
          isFetching={isFetching}
          pagination={{
            current: page,
            pageSize: PAGE_SIZE,
            total: TOTAL_ITEMS,
            showSizeChanger: false,
            position: ["bottomCenter"],
            onChange: (nextPage) => {
              setPage(nextPage);
            },
          }}
        />
      </Card>
    </div>
  );
}