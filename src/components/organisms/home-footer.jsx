import FooterGroup from "../molecules/footer-group";
import ChillLogoFull from "../atoms/chill-logo-full";

const HomeFooter = ({ genreData, helpData }) => {
  return (
    <footer className="
        flex flex-col gap-10
        border-t border-gray-300
        px-4 sm:px-10 md:px-20
        py-3 sm:py-5 md:py-8
        bg-[#181A1C]
        "
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <section className="flex flex-col flex-none items-start gap-4">
          <a href="#top">
            <ChillLogoFull />
          </a>
          <p className="text-xs md:text-sm text-gray-400 me-16">
            &copy; <span className="font-semibold text-white">{ new Date().getFullYear() }</span>
            Chill All Rights Reserved.
          </p>
        </section>
        
        <FooterGroup
          title={ genreData.title }
          links={ genreData.links }
          basePath={ genreData.basePath }
          isGrid //TODO: ganti jadi block column-4
          gridCols="grid-cols-2 md:grid-cols-4" //TODO: ganti jadi block
        />
      
        <FooterGroup
          title={ helpData.title }
          links={ helpData.links }
          basePath={ helpData.basePath }
        />
      </div>
    </footer>
  );
};

export default HomeFooter;