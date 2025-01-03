import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";
import { statusTypes } from "../assets/siteConfig";
import { updateOrder } from "../api/api";
import { useContext } from "react";
import { OrdersContext } from "../Context";

export const StyledDropdown = styled.select`
  display: felx;
  background: ${colorsV2.gray};
  border-radius: 0.5rem;
  width: 9rem;
  height: 1.5rem;
  outline: none;
  border: none;
  color: ${colorsV2.navi};
  text-align: end;
  font-size: 1rem;
  box-shadow: 3px 3px 10px ${colorsV2.shadow};
`;

const Dropdown = ({ order }) => {
  const orderCtx = useContext(OrdersContext);
  const handleSelection = (e) => {
    e.stopPropagation();
  };
  const handleStatusUpdate = async (newStatus) => {
    const result = await updateOrder(
      order.shelf_depth,
      order.shelf_length,
      order.conseeled,
      order.color,
      order.notes,
      order.price,
      order.phone_number,
      order.name,
      order.date,
      newStatus,
      order.id
    );
    orderCtx.updateDataObject(result);
  };
  const statusKeys = Object.keys(statusTypes);
  return (
    <StyledDropdown
      key={order.id}
      onClick={handleSelection}
      onChange={(e) => handleStatusUpdate(e.target.value)}
      defaultValue={statusKeys.find((key) => key === order.status)}
    >
      {statusTypes.statusArray().map((status, index) => (
        <option key={status} value={statusKeys[index]}>
          {status}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
