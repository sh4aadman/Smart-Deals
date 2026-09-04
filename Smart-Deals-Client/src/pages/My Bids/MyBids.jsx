import Table from "../../components/ui/Table/Table";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";

function MyBids() {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBids(data);
        });
    }
  }, [user]);

  return (
    <section>
      <h2 className="mt-20 mb-10 font-bold text-5xl text-primary text-center">
        My Bids: <span className="text-secondary">{bids.length}</span>
      </h2>
      <section className="px-20 mb-20">
        <Table bids={bids} status={true} />
      </section>
    </section>
  );
}

export default MyBids;
