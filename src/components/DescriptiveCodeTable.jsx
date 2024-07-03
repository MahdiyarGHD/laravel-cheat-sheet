import React from 'react';
import {
    Table,
    TableRow,
    TableRowItem
} from '../components/Table';

const DescriptiveCodeTable = ({children}) => {
    
    const modifyCodeblocksDeeply = (children) => {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === React.Fragment) {
            return React.cloneElement(child, {
              children: modifyCodeblocksDeeply(child.props.children),
            });
          }
      
          if (React.isValidElement(child) && child.type.name === 'Codeblock') {
            return React.cloneElement(child, {
              isLineNumberDisabled: true,
            });
          }
      
          if (React.isValidElement(child) && child.props.children) {
            return React.cloneElement(child, {
              ...child.props,
              children: modifyCodeblocksDeeply(child.props.children),
            });
          }
      
          return child;
        });
      };
    
      const addTextRightToFirstChild = (children, isFirst = true) => {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === React.Fragment) {
            return React.cloneElement(child, {
              children: addTextRightToFirstChild(child.props.children, false),
            });
          }
      
          if (isFirst && React.isValidElement(child)) {
            const className = child.props.className ? `${child.props.className} text-right` : 'text-right';
            return React.cloneElement(child, {
              ...child.props,
              className,
              children: addTextRightToFirstChild(child.props.children, false),
            });
          }
      
          if (React.isValidElement(child) && child.props.children) {
            return React.cloneElement(child, {
              ...child.props,
              children: addTextRightToFirstChild(child.props.children, false),
            });
          }
      
          return child;
        });
      };
      
    const modifiedChildren = modifyCodeblocksDeeply(children);
    
    const childrenWithModifiedFirstChild = React.Children.map(modifiedChildren, (child) => {
        if (React.isValidElement(child) && child.props.children) {
          let firstChild = React.Children.toArray(child.props.children)[0];
    
          if (React.isValidElement(firstChild)) {
            const classList = firstChild.props.classList ? `${firstChild.props.classList} text-right` : 'text-right';
            firstChild = React.cloneElement(firstChild, {
              ...firstChild.props,
              classList,
            });
          }
    
          return React.cloneElement(child, {
            ...child.props,
            children: [firstChild, ...React.Children.toArray(child.props.children).slice(1)],
          });
        }
        return child;
      });
      
    return <>
        <Table columns={["توضیح", "کُد"]}>
            {childrenWithModifiedFirstChild}
        </Table>
    </>    
}

export default DescriptiveCodeTable;