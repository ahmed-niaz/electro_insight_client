
import qa from '../assets/logo/qa.svg'
const QA = () => {
  return (
   <main>
   
     <div className="flex justify-between gap-4 items-center">
      <div className="basis-1/2">
      <div>
        <img className=""  src={qa} alt="" />
    </div>
      </div>
      <div className="basis-1/2 space-y-4">
   
        <div className="collapse collapse-arrow bg-black">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-extrabold text-white">
          Are there alternatives to traditional gasoline and diesel fuels?
          </div>
          <div className="collapse-content text-gray-200 text-sm font-bold">
            <p>Explore biofuels such as ethanol and biodiesel, derived from renewable sources like corn, sugarcane, and algae, offering cleaner energy options.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-black">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-extrabold text-white">
          How can I enhance my vehicle's fuel efficiency?
          </div>
          <div className="collapse-content text-gray-200 text-sm font-bold">
            <p> Learn about aerodynamic modifications, fuel additives, and hybrid conversion kits designed to improve mileage and reduce environmental impact.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-black">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-extrabold text-white">
          Where can I find information on alternative transportation methods?
          </div>
          <div className="collapse-content text-gray-200 text-sm font-bold">
            <p>Discover alternatives like electric bicycles, scooters, and public transit systems, promoting sustainable urban mobility and reducing traffic congestion.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-black">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-extrabold text-white">
          What innovative technologies are revolutionizing the automotive industry?
          </div>
          <div className="collapse-content text-gray-200 text-sm font-bold">
            <p>Delve into advancements such as autonomous driving systems, vehicle-to-grid integration, and artificial intelligence for enhanced safety and efficiency.</p>
          </div>
        </div>
      </div>
    </div>
   </main>
  );
};

export default QA;
