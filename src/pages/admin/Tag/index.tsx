import { PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useRequest } from "ahooks";
import { getTags } from "../../../services/tag";

const columns: ProColumns<API.TagItem>[] = [
  {
    title: "标题",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    width: 120,
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" },
        ]}
      />,
    ],
  },
];

const Tag: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const { runAsync: runAsyncTags } = useRequest(getTags, { manual: true });

  const tableRequest = async () => {
    const tagData = await runAsyncTags();
    return {
      page: 1,
      data: tagData.data.records,
      success: true,
      total: 100,
    };
  };

  return (
    <ProTable<API.TagItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={tableRequest}
      editable={{
        type: "multiple",
      }}
      columnsState={{
        persistenceKey: "pro-table-singe-demos",
        persistenceType: "localStorage",
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === "get") {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 16,
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,

        <Link to="/admin/statistics">geaege</Link>,
      ]}
    />
  );
};

export default Tag;
