import { Button } from "./Button";

export const ProfileCard = ({ name, role, bio, followers, following, posts }) => {
  return (
    // group — enables group-hover:* on children
    <div className="group relative w-72 rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* Cover image area: bg-gradient h-24 */}
      <div className="h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />

      {/* Avatar: relative -mt-10 — negative margin to overlap cover */}
      <div className="px-5 pb-5">
        <div className="relative -mt-10 mb-3 w-fit">
          {/* ring-4 ring-white ring-offset-0 — white ring around avatar */}
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
            alt={name}
            className="w-20 h-20 rounded-full ring-4 ring-white bg-white object-cover"
          />
          {/* Online indicator: absolute bottom-0 right-0 */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
        </div>

        {/* Name & role: truncate prevents overflow */}
        <h3 className="font-bold text-gray-900 text-lg truncate">{name}</h3>
        <p className="text-sm text-blue-600 font-medium mb-2">{role}</p>
        {/* line-clamp-2 — clamps text to 2 lines */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{bio}</p>

        {/* Stats row: grid grid-cols-3 divide-x */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 text-center border-t border-gray-100 pt-4">
          {[
            { label: "Posts", val: posts },
            { label: "Followers", val: followers },
            { label: "Following", val: following },
          ].map(({ label, val }) => (
            <div key={label}>
              <p className="font-bold text-gray-900 text-sm">{val}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Action buttons: mt-4 flex gap-2 */}
        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1">
            Follow
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};