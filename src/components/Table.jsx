const Table = ({ columns = [], children }) => (
    <table dir="rtl" className="table-fixed text-left w-full mt-2 mb-2">
      <thead className="text-sm text-right">
        <tr>
          {columns.map((column) => (
            <th key={column} className="font-medium p-1">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-xs bg-blue-500/[8%]">
        {children}
      </tbody>
    </table>
  );
  
  const TableRow = ({ children, classList = '', ...props }) => (
    <tr className={classList + ` border-t-[1px] border-t-blue-500/20`} {...props}>
      {children}
    </tr>
  );
  
  const TableRowItem = ({ children, classList = '', ...props }) => (
    <td className={classList + ` p-1 font-light`} {...props}>
      {children}
    </td>
  );
  
  export { Table, TableRow, TableRowItem };
  