import clsx from 'clsx'
import FooterGroup from "../molecules/footer-group";
import ChillLogoFull from "../atoms/chill-logo-full";
import Copyright from "../atoms/copyright";

const HomeFooter = ({ genreData, helpData, className }) => {
  const baseStyle = `
    flex flex-col sm:flex-row gap-6
    border-t border-gray-300
    bg-[#181A1C]
  `

  return (
    <footer className={clsx(baseStyle, className)}>
      {/* <div className="flex flex-col sm:flex-row gap-6"> */}
        <section className="flex flex-col flex-none items-start gap-2 sm:gap-4">
          <a href="#top"><ChillLogoFull /></a>
          <Copyright />
        </section>
        
        <FooterGroup
          title={ genreData.title }
          links={ genreData.links }
          basePath={ genreData.basePath }
          isGrid //TODO: ganti jadi block column-4
          gridCols="grid-cols-2 md:grid-cols-4" //TODO: ganti jadi block
          className="sm:ml-auto"
        />
      
        <FooterGroup
          title={ helpData.title }
          links={ helpData.links }
          basePath={ helpData.basePath }
          className="sm:ml-auto"
        />
      {/* </div> */}
    </footer>
  );
};

export default HomeFooter;