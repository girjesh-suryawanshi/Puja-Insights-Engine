import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DateRangeFilter } from "@/components/ui/DateRangeFilter";
import { PaginationControls } from "@/components/ui/PaginationControls";
interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  pujaType: string;
  date: string;
  address: string;
  city: string;
  message: string | null;
  status: string;
  createdAt: string;
}
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
import { Download, Calendar, MapPin, User, Mail, Phone, Info, Trash2 } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function BookingsManager() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [startDate, setStartDate] = React.useState<string | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<string | undefined>(undefined);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete booking");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["/api/admin/bookings"] });
    },
    onError: () => {
      toast.error("Failed to delete booking");
    }
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      deleteMutation.mutate(id);
    }
  };

  const { data: response, isLoading, error } = useQuery<{ data: Booking[]; total: number }>({
    queryKey: ["/api/admin/bookings", { page, pageSize, startDate, endDate }],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        size: pageSize.toString()
      });
      if (startDate) params.append("start", startDate);
      if (endDate) params.append("end", endDate);
      const res = await fetch(`/api/admin/bookings?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
  });

  const bookings = response?.data || [];
  const total = response?.total || 0;


  const exportToCSV = () => {
    if (!bookings || bookings.length === 0) {
      toast.error("No data available to export");
      return;
    }

    const headers = ["ID", "Name", "Email", "Phone", "Puja Type", "Date", "City", "Address", "Status", "Created At"];
    const csvContent = [
      headers.join(","),
      ...bookings.map((b: Booking) => [
        b.id,
        `"${b.name}"`,
        b.email,
        b.phone,
        `"${b.pujaType}"`,
        b.date,
        `"${b.city}"`,
        `"${b.address?.replace(/"/g, '""')}"`,
        b.status,
        b.createdAt
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `bookings_export_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Bookings exported successfully!");
  };

  if (isLoading) return <div className="p-8 text-center">Loading bookings...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading bookings</div>;

  return (
    <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">Pooja Bookings</h1>
            <p className="text-muted-foreground">Manage and track all spiritual service reservations.</p>
          </div>
          <Button 
            onClick={exportToCSV}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export All Data (CSV)
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
            <Calendar className="w-5 h-5 text-orange-500" />
            Recent Bookings
          </CardTitle>
          <CardDescription>A complete history of all pooja bookings made through the platform.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow>
                  <TableHead className="font-bold text-gray-900">ID</TableHead>
                  <TableHead className="font-bold text-gray-900">Customer</TableHead>
                  <TableHead className="font-bold text-gray-900">Service Info</TableHead>
                  <TableHead className="font-bold text-gray-900">Location</TableHead>
                  <TableHead className="font-bold text-gray-900">Status</TableHead>
                  <TableHead className="font-bold text-gray-900 text-right">Created</TableHead>
                  <TableHead className="font-bold text-gray-900 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings?.map((booking: Booking) => (
                  <TableRow key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-mono text-xs text-gray-500">#{booking.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{booking.name}</span>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {booking.email}</span>
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {booking.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 break-words max-w-[200px]">{booking.pujaType}</span>
                        <span className="text-xs text-orange-600 font-semibold mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {booking.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-500" /> {booking.city}
                        </span>
                        <span className="text-xs text-gray-500 mt-1 break-words max-w-[180px]">{booking.address}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${
                        booking.status === 'completed' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 
                        booking.status === 'cancelled' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                        'bg-orange-100 text-orange-700 hover:bg-orange-100'
                      } border-none font-bold px-3 py-1`}>
                        {booking.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-xs text-gray-500">
                      {format(new Date(booking.createdAt), "MMM d, h:mm a")}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDelete(booking.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {(!bookings || bookings.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={7} className="h-48 text-center text-muted-foreground italic">
                      <div className="flex flex-col items-center gap-2">
                        <Info className="w-8 h-8 opacity-20" />
                        No bookings found in the database.
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
