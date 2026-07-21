import { FiExternalLink } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const LinkIcon = ({ label }) => {
  const normalized = (label || "").toLowerCase();
  if (normalized.includes("app store")) {
    return <FaApple aria-hidden="true" className="h-4 w-4 shrink-0" />;
  }
  if (normalized.includes("play store")) {
    return <FaGooglePlay aria-hidden="true" className="h-4 w-4 shrink-0" />;
  }
  return <FiExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />;
};

const LinkButton = ({ href, label, variant = "primary" }) => {
  const className =
    variant === "primary"
      ? "btn-primary w-full sm:w-auto px-5 py-2.5 rounded-md text-base"
      : "btn-secondary w-full sm:w-auto px-5 py-2.5 text-base";

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      <LinkIcon label={label} />
      <span>{label}</span>
    </a>
  );
};

const ProjectCard = ({
  title,
  problem,
  approach,
  result,
  link,
  linkLabel,
  secondaryLink,
  secondaryLabel,
  image,
  alt,
  techStack,
  impactHighlights,
}) => {
  return (
    <div className="bg-gray-800/70 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl mt-8 p-4 flex flex-col h-full border border-gray-700">
      <div className="w-full h-48 overflow-hidden rounded-xl bg-gray-900">
        <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <h3 className="text-2xl font-semibold pt-4">{title}</h3>

      {(impactHighlights?.length > 0 || techStack?.length > 0) && (
        <div className="mt-3 rounded-xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">Impact highlights</p>
          {impactHighlights?.length > 0 && (
            <ul className="space-y-1.5 text-sm text-gray-200">
              {impactHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5 shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          {techStack?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-gray-900 text-teal-200 px-3 py-1 text-xs font-medium border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="text-sm text-gray-200 leading-relaxed space-y-2 flex-1 pt-4">
        <p>
          <span className="font-semibold text-white">Problem:</span> {problem}
        </p>
        <p>
          <span className="font-semibold text-white">Approach:</span> {approach}
        </p>
        <p>
          <span className="font-semibold text-white">Result:</span> {result}
        </p>
      </div>

      {link && (
        <div className="pt-4 mt-auto flex flex-wrap gap-3">
          <LinkButton href={link} label={linkLabel || "Live demo"} variant="primary" />
          {secondaryLink && (
            <LinkButton href={secondaryLink} label={secondaryLabel || "Secondary link"} variant="secondary" />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
