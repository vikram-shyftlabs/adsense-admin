import React, {useState} from 'react';

interface IEditableCellProps {
  getValue: any;
  row: any;
  column: any;
  table: any;
}

const EditableCell = ({getValue, row, column, table}: IEditableCellProps) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;