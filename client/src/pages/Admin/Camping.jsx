const Camping = () => {
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">Create Camping</h1>
      <div className="border p-8 rounded-md">
        <form>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="price" placeholder="Price" />    
            <input type="text" name="description" placeholder="Description" />
            <button>Submit</button>
        </form>

      </div>
    </section>
  );
};
export default Camping;
