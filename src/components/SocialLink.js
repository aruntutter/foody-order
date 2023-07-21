const socialLinks = ({ id, itemClass, href, icon }) => {
  return (
    <li>
      <a
        href={href}
        key={id}
        target="_blank"
        rel="noreferrer"
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default socialLinks;
