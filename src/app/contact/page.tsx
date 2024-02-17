import { getAllContacts } from "@/lib/api";

export default function ContactPage() {
  const contacts = getAllContacts();
  return (
    <div className="mt-10">
      <div className="mt-3 mr-36 ml-36">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {contacts.map((contact) => {
            return (
              <div>
                <div className="relative my-8 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
                  <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                    <img
                      className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
                      src={contact.imagepath}
                    />
                  </div>

                  <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                    <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200">
                      {contact.name}
                    </p>

                    <div className="mb-4 md:text-lg text-gray-400">
                      <p>{contact.title}</p>
                    </div>

                    <div className="flex gap-4">
                      <a href="/">{contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
