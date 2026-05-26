import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";

import {
  BarChartOutlined,
  FormOutlined,
  TableOutlined,
} from "@ant-design/icons";
import {PageHeader} from "../components/ui/PageHeader.jsx";

export default function HomePage() {
  const items = [
    {
      title: "Coins Table",
      icon: <TableOutlined />,
      description:
        "Cryptocurrency market table with sorting and formatting.",
    },

    {
      title: "Paginated Table",
      icon: <TableOutlined />,
      description:
        "Server-side pagination with React Query caching.",
    },

    {
      title: "Realtime Charts",
      icon: <BarChartOutlined />,
      description:
        "Auto-refreshing cryptocurrency price charts.",
    },

    {
      title: "Form Wizard",
      icon: <FormOutlined />,
      description:
        "Validated form workflow with summary screen.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={'Crypto Analytics Dashboard'}
        description={'Built with React, Ant Design and TanStack Query.'}
      />

      <Typography.Text
        className={'whitespace-pre-line'}
      >
        {
          'Дякую за тестове завдання 🙂\n' +
          'Мені було цікаво його виконувати\n' +
          'Круто, що опис завдання та додаткові джерела не як зазвичай, у google docs,\n' +
          'а прямо всередині проекту.'
        }
      </Typography.Text>

      <Row gutter={[24, 24]}>
        {items.map((item) => (
          <Col xs={24} md={12} key={item.title}>
            <Card className="h-full">
              <div className="flex flex-col gap-3">
                <div className="text-2xl text-blue-600">
                  {item.icon}
                </div>

                <Typography.Title
                  level={4}
                  className="!mb-0"
                >
                  {item.title}
                </Typography.Title>

                <Typography.Text type="secondary">
                  {item.description}
                </Typography.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}