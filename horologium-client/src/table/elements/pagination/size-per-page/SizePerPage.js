import React from 'react';

import Const from '../../constants/index';
import SimpleSelect from "./SimpleSelect";

const SizePerPage = ({ sizePerPage, options, onChange }) => (
   <SimpleSelect
      className="clear-both dropdown-width"
      notClearableOptions
      onChange={(value) => onChange && onChange(value)}
      value={{
         id: sizePerPage || Const.SIZE_PER_PAGE,
         name: sizePerPage || Const.SIZE_PER_PAGE
      }}
      options={options || Const.SIZE_PER_PAGE_LIST}
   />
);

export default SizePerPage;
