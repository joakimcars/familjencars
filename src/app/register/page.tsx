export default function RegisterPage() {
  return (
    <div>
      <div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 mx-40">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Namn
                    </th>
                    <th scope="col" className="px-6 py-3">
                      E-mail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Henrik Cars
                    </th>
                    <td className="px-6 py-4">henrikcars@hotmail.com</td>
                    <td className="px-6 py-4">070-524 18 25</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Björn Cars
                    </th>
                    <td className="px-6 py-4">bjorn.cars@hotmail.com</td>
                    <td className="px-6 py-4">070-781 85 62</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Joakim Cars
                    </th>
                    <td className="px-6 py-4">joakim.cars@rillion.com</td>
                    <td className="px-6 py-4">076-231 86 56</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
