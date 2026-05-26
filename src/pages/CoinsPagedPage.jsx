import { useState } from "react";

import {
  Alert,
  Card,
} from "antd";

import { CoinsTable } from "../components/tables/CoinsTable";
import { useCoinsPaged } from "../hooks/useCoinsPaged";
import {PageHeader} from "../components/ui/PageHeader.jsx";
import {PageContainer} from "../components/ui/PageContainer.jsx";

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
    <PageContainer>
      <PageHeader
        title={'Paginated Coins'}
        description={'Server-side pagination with Tanstack React Query'}
      />

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
    </PageContainer>
  );
}