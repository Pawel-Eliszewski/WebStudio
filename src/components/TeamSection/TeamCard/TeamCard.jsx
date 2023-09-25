import PropTypes from "prop-types";
import { Socials } from "../../Socials/Socials";
import "./TeamCard.css";
/**
 * @param {{ member: { id: string, name: string, position: string, img: string,
 * img_2x: string, alt: string, instagram: string, twitter: string,
 * facebook: string, linkedin: string } }} props
 */
export const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-card__img-wrapper">
        <img
          className="team-card__img"
          src={`/assets/${member.img}`}
          srcSet={`/assets/${member.img_2x} 2x`}
          alt={member.alt}
        />
      </div>
      <h3 className="team-card__title">{member.name}</h3>
      <p className="team-card__subtitle">{member.position}</p>
      <Socials
        memberSocials={{
          instagram: member.instagram,
          twitter: member.twitter,
          facebook: member.facebook,
          linkedin: member.linkedin,
        }}
        styles="--team-card"
      />
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    img_2x: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }),
};
