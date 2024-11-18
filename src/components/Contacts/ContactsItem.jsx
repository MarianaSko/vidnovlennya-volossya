import { ItemContainer, ItemTitle } from "./ContactsItem.styled";

const ContactsItem = ({ title, img, children }) => {
  return (
    <ItemContainer>
      <ItemTitle>
        {img}
        {title}
      </ItemTitle>
      {children}
    </ItemContainer>
  );
};

export default ContactsItem;
