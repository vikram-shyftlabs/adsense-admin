import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {FooterCell} from './footer-cell.component';
interface ITableProps {
  data: any[];
  columns: any[];
  defaultColumn?: any;
  setData?: (val: any) => void;
  footerButtonTitle?: string;
  footerButtonAction?: () => void;
}
declare module '@tanstack/react-table' {
  interface TableMeta<TData > {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}
const TableGrid = ({
  data,
  columns,
  defaultColumn,
  setData,
  footerButtonTitle,
  footerButtonAction,
}: ITableProps) => {
  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        if (setData) {
          setData((old) =>
            old.map((row, index) => {
              if (index === rowIndex) {
                return {
                  ...old[rowIndex]!,
                  [columnId]: value,
                };
              }
              return row;
            }),
          );
        }
      },
    },
    debugTable: true,
  });
  return (
    <table className="border border-slate-200 rounded-lg w-full">
      <thead className="border-b border-slate-200">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="header-row-style py-3 bg-[#eee] font-semibold " key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className="body-row-style border-b border-slate-200" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="body-cell-style p-4 text-center" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {footerButtonTitle && footerButtonAction && (
        <tfoot>
          <tr className="body-row-style border-b border-slate-200">
            <th colSpan={table.getCenterLeafColumns().length} align="left">
              <FooterCell
                buttonAction={footerButtonAction}
                buttonTitle={footerButtonTitle}
              />
            </th>
          </tr>
        </tfoot>
      )}
    </table>
  );
};
export default TableGrid;