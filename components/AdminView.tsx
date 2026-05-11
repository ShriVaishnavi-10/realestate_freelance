export interface LeadSubmission {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  propertyInterest: string;
  message: string;
}

interface AdminViewProps {
  submissions: LeadSubmission[];
}

export default function AdminView({ submissions }: AdminViewProps) {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-brand-navy p-8 rounded-3xl shadow-xl">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-300">Manage your incoming leads and property inquiries.</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white/10 px-6 py-4 rounded-xl border border-white/20 text-center">
            <p className="text-sm text-gray-300 uppercase tracking-widest mb-1">Total Leads</p>
            <p className="text-4xl font-bold text-brand-gold">{submissions.length}</p>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">Recent Inquiries</h2>
          </div>
          
          <div className="overflow-x-auto">
            {submissions.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Client Info</th>
                    <th className="p-4 font-medium">Property Interest</th>
                    <th className="p-4 font-medium">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {submissions.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="p-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {lead.date}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <p className="font-bold text-brand-navy dark:text-white">{lead.name}</p>
                        <p className="text-sm text-gray-500">{lead.email}</p>
                        <p className="text-sm text-gray-500">{lead.phone}</p>
                      </td>
                      <td className="p-4">
                        <span className="inline-block bg-brand-gold/20 text-brand-navy dark:text-brand-gold font-semibold px-3 py-1 rounded-full text-xs">
                          {lead.propertyInterest}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate">
                        {lead.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">No leads yet</h3>
                <p className="text-gray-500">When users submit the contact form, they will appear here.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
