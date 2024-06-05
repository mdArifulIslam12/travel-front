/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const BlogDetailsPage = ({ blog }: { blog: any }) => {
  const { image, details, title, categories, date } = blog;
  return (
    <div className="">
      <div className="">
        <img
          src={image}
          className="w-full h-[600px] -z-10 "
          style={{
            objectFit: "cover",
            borderRadius: "3px",
          }}
          alt=""
        />
      </div>
      <div className="lg:max-w-5xl mx-auto bg-white mt-[20px] lg:px-[80px] py-[60px] small-device-sheard">
        <div className="">
          <p className="text-[14px] mb-2 font-bold uppercase  text-[#969BA1] flex items-center ">
            <span className="text-[#E46D30]">{categories}</span>
            <span className="mx-[8px]">{date}</span>
            <span>Admin</span>
          </p>
          <h2 className="lg:text-5xl text-3xl  font-bold headerTitle text-black">
            {title}
          </h2>
          <p className="mt-7 text-[#969BA1] text-md ">{details}</p>
          <p className="mt-7 text-[#969BA1] text-md ">
            Experience the best of Europe with our 15-day grand tour, covering
            five countries and some of the continent’s most iconic cities. Begin
            your journey in Paris, the City of Lights, where you’ll marvel at
            the Eiffel Tower, stroll along the Champs-Élysées, and explore the
            historic Notre-Dame Cathedral. Enjoy a Seine River cruise and taste
            exquisite French cuisine, immersing yourself in the romance and
            culture that make Paris an eternal favorite among travelers. <br />{" "}
            <br />
            Next, travel to the romantic city of Venice, Italy. Navigate the
            enchanting canals by gondola, visit the magnificent St. Mark's
            Basilica, and explore the artistic treasures of the Doge's Palace.
            Indulge in delicious Italian gelato and experience the vibrant
            culture of this floating city, where every turn offers a new
            discovery. Venice’s unique charm, with its maze of waterways and
            historic architecture, provides an unforgettable backdrop for your
            European adventure.
            <br /> <br /> From Venice, head to Florence, the cradle of the
            Renaissance. Here, you can visit the awe-inspiring Florence
            Cathedral and see Michelangelo's David up close. Walk through the
            historic Ponte Vecchio and explore the Uffizi Gallery, home to an
            incredible collection of Renaissance art. In Florence, you'll also
            have the chance to taste some of Tuscany’s finest wines, enhancing
            your appreciation for the region's rich cultural and culinary
            heritage. <br /> <br /> The adventure continues to Rome, the Eternal
            City. Discover the ancient wonders of the Colosseum, Roman Forum,
            and Palatine Hill, where history comes alive through the ruins of
            the Roman Empire. Stand in awe of Vatican City, with its majestic
            St. Peter's Basilica and the breathtaking Sistine Chapel, adorned
            with Michelangelo's masterpieces. Enjoy authentic Italian pasta and
            pizza in the bustling streets of Rome, where every meal is a
            celebration of flavors and traditions.
            <br /> <br /> Your journey then takes you to the picturesque Swiss
            Alps, where you’ll experience the stunning beauty of Switzerland’s
            natural landscapes. Visit the charming town of Lucerne, with its
            iconic Chapel Bridge and serene lake. Take a scenic train ride
            through the Alps, marveling at the snow-capped peaks and lush
            valleys that define this breathtaking region. In Switzerland, you'll
            have the opportunity to explore quaint villages, indulge in Swiss
            chocolate and cheese, and breathe in the crisp mountain air.
            <br /> <br /> Continuing to Germany, the tour brings you to the
            historic city of Munich. Explore the rich history and vibrant
            culture of Bavaria, visiting landmarks such as the Nymphenburg
            Palace and Marienplatz. Enjoy a taste of German beer and sausages at
            a traditional beer garden, experiencing the warm hospitality and
            festive spirit that Munich is known for.
            <br /> <br /> Finally, the tour concludes in the Netherlands, with a
            visit to the dynamic city of Amsterdam. Cruise along the picturesque
            canals, visit the Anne Frank House, and explore the renowned
            Rijksmuseum. Amsterdam’s vibrant arts scene, charming streets, and
            lively atmosphere provide the perfect end to your European
            adventure.
            <br /> <br /> This 15-day grand tour offers a comprehensive and
            unforgettable journey through Europe’s most beloved destinations.
            From the romantic streets of Paris to the historic ruins of Rome,
            and the natural beauty of the Swiss Alps to the cultural vibrancy of
            Amsterdam, every moment of this tour is designed to create lasting
            memories. Join us for an adventure that captures the essence of
            Europe’s diverse landscapes, rich history, and timeless charm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
