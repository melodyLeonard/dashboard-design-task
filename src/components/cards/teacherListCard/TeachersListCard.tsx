import {FC} from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Flex } from '../../layout/Layout';
import { Lead, Paragraph } from '../../layout/Typography';
import './teachersList.scss'
import ActionIcon from '../../icons/ActionIcon';

interface IProps {
  headerItems: any[];
  tableItems: any[];
}

const TeachersListCard: FC<IProps> = ({headerItems, tableItems}) => {
  return <div className='teacher-list-container'>
    <Flex.Row className="header">
      <Lead>Teachers List</Lead>
    </Flex.Row>

    <div className="table-wrapper">
      <table className="table">
        <tr>
            {
              headerItems.map((item:string, idx: number) => 
              <th>
                <Lead className="table-item" key={idx}>{item}</Lead>
              </th>)
            }
        </tr>
            {
              tableItems.map((item:any, idx: number) => 
                <tr className='table-item-row'>
                  <td>
                    <Paragraph className="table-item" key={idx}>{item.name}</Paragraph>
                  </td>
                   <td>
                    <Paragraph className="table-item" key={idx}>{item.department}</Paragraph>
                  </td>
                   <td>
                    <Paragraph className="table-item" key={idx}>{item.email}</Paragraph>
                  </td>
                  <td>
                    <Paragraph className="table-item" key={idx}>{item.className}</Paragraph>
                  </td>
                  <td>
                    <Paragraph className="table-item" key={idx}>{item.subject}</Paragraph>
                  </td>
                  <td>
                    <Flex.Row className="table-item action">
                      <ActionIcon color='primary' icon={<MdModeEditOutline className='icon'/>} />
                      <ActionIcon color='red' icon={<RiDeleteBin6Line className='icon'/>} />
                    </Flex.Row>
                  </td>
                </tr>
                )
            }
      </table>
    </div>
  </div>;
};

export default TeachersListCard;
