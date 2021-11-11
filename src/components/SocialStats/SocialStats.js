import PropTypes from "prop-types";

function SocialStats({ stats: { followers, views, likes } }) {
  return (
    <ul className="grid grid-cols-3 w-full">
      <li className=" h-16 flex flex-col justify-center items-center bg-gray-200  border-solid border-gray-300 border-t border-r rounded-bl-md">
        <span className="text-xs block">Followers</span>
        <span className="text-sm font-bold">{followers}</span>
      </li>
      <li className=" h-16 flex flex-col justify-center items-center bg-gray-200  border-solid border-gray-300 border-t ">
        <span className="text-xs block">Views</span>
        <span className="text-sm font-bold">{views}</span>
      </li>
      <li className=" h-16 flex flex-col justify-center items-center bg-gray-200  border-solid  border-gray-300 border-t border-l rounded-br-md">
        <span className="text-xs block">Likes</span>
        <span className="text-sm font-bold">{likes}</span>
      </li>
    </ul>
  );
}

SocialStats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default SocialStats;
