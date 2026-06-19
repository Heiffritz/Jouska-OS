import { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Taskbar from "../taskbar/Taskbar";

import AboutWindow from "../windows/AboutWindow";
import ProjectsWindow from "../windows/ProjectsWindow";
import GalleryWindow from "../windows/GalleryWindow";
import SkillsWindow from "../windows/SkillsWindow";
import CertificatesWindow from "../windows/CertificatesWindow";
import ContactWindow from "../windows/ContactWindow";

import { desktopIcons } from "../../data/desktopIcons";

function Desktop() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="xp-desktop">
      <div className="desktop-icons">
        {desktopIcons.map((icon) => (
          <div
            key={icon.title}
            onDoubleClick={() => {
              switch (icon.title) {
                case "About":
                  setAboutOpen(true);
                  break;

                case "Projects":
                  setProjectsOpen(true);
                  break;

                case "Gallery":
                  setGalleryOpen(true);
                  break;

                case "Skills":
                  setSkillsOpen(true);
                  break;

                case "Certificates":
                  setCertificatesOpen(true);
                  break;

                case "Contact":
                  setContactOpen(true);
                  break;

                default:
                  break;
              }
            }}
          >
            <DesktopIcon
              title={icon.title}
              emoji={icon.emoji}
            />
          </div>
        ))}
      </div>

      {aboutOpen && (
        <AboutWindow
          onClose={() => setAboutOpen(false)}
        />
      )}

      {projectsOpen && (
        <ProjectsWindow
          onClose={() => setProjectsOpen(false)}
        />
      )}

      {galleryOpen && (
        <GalleryWindow
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {skillsOpen && (
        <SkillsWindow
          onClose={() => setSkillsOpen(false)}
        />
      )}

      {certificatesOpen && (
        <CertificatesWindow
          onClose={() => setCertificatesOpen(false)}
        />
      )}

      {contactOpen && (
        <ContactWindow
          onClose={() => setContactOpen(false)}
        />
      )}

      <Taskbar />
    </div>
  );
}

export default Desktop;