import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DateRangeFilter } from "@/components/ui/DateRangeFilter";
import { PaginationControls } from "@/components/ui/PaginationControls";
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}
import { format } from "date-fns";
import { Download, MessageSquare, Mail, Phone, Info, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { toast } from "sonner";

export function InquiriesManager() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [startDate, setStartDate] = React.useState<string | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<string | undefined>(undefined);

  const { data: response, isLoading, error } = useQuery<{ data: Contact[]; total: number }>({
    queryKey: ["/api/admin/contacts", { page, pageSize, startDate, endDate }],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        size: pageSize.toString()
      });
      if (startDate) params.append("start", startDate);
      if (endDate) params.append("end", endDate);
      const res = await fetch(`/api/admin/contacts?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch contacts");
      return res.json();
    },
  });

  const contacts = response?.data || [];
  const total = response?.total || 0;

  const exportToCSV = () => {
    if (!contacts || contacts.length === 0) {
      toast.error("No data available to export");
      return;
    }

    const headers = ["ID", "Name", "Email", "Phone", "Subject", "Message", "Received At"];
    const csvContent = [
      headers.join(","),
      ...contacts.map((c: Contact) => [
        c.id,
        `"${c.name}"`,
        c.email,
        c.phone,
        `"${c.subject?.replace(/"/g, '""')}"`,
        `"${c.message?.replace(/"/g, '""')}"`,
        c.createdAt
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `inquiries_export_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Inquiries exported successfully!");
  };

  if (isLoading) return <div className="p-8 text-center">Loading inquiries...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading inquiries</div>;

  return (
    <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">Contact Inquiries</h1>
            <p className="text-muted-foreground">Review and respond to customer messages and feedback.</p>
          </div>
          <Button 
            onClick={exportToCSV}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export All Inquiries (CSV)
          </Button>
        </div>
        <DateRangeFilter
          startDate={startDate}
          endDate={endDate}
          onChange={(s, e) => { setStartDate(s); setEndDate(e); setPage(1); }}
        />

      <Card className="border-none shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            Inbox
          </CardTitle>
          <CardDescription>All incoming messages from the "Contact Us" page.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow>
                  <TableHead className="font-bold text-gray-900">ID</TableHead>
                  <TableHead className="font-bold text-gray-900">Sender</TableHead>
                  <TableHead className="font-bold text-gray-900">Subject & Message</TableHead>
                  <TableHead className="font-bold text-gray-900 text-right">Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts?.map((contact: Contact) => (
                  <TableRow key={contact.id} className="hover:bg-gray-50/50 transition-colors align-top">
                    <TableCell className="font-mono text-xs text-gray-500 pt-5">#{contact.id}</TableCell>
                    <TableCell className="pt-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{contact.name}</span>
                        <div className="flex flex-col gap-1 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
                            <Mail className="w-3 h-3" /> {contact.email}
                          </span>
                          <span className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
                            <Phone className="w-3 h-3" /> {contact.phone}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="pt-5 max-w-sm">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-gray-100 rounded-md w-fit">
                          <Tag className="w-3 h-3 text-gray-500" />
                          <span className="text-xs font-bold text-gray-700 uppercase">{contact.subject}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed bg-white border border-gray-100 p-4 rounded-xl shadow-sm italic">
                          "{contact.message}"
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pt-5">
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                          <Clock className="w-3 h-3 text-blue-500" />
                          {format(new Date(contact.createdAt), "MMM d, yyyy")}
                        </div>
                        <span className="text-xs text-gray-400">{format(new Date(contact.createdAt), "h:mm a")}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {(!contacts || contacts.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={4} className="h-48 text-center text-muted-foreground italic">
                      <div className="flex flex-col items-center gap-2">
                        <Info className="w-8 h-8 opacity-20" />
                        No inquiries found.
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <PaginationControls
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
