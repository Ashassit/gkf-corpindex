import { useState, useEffect } from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Checkbox } from '../../ui/checkbox';
import { Shield, Calendar, Briefcase, Heart, GraduationCap, Loader2, LogOut, PhoneCall, MessageCircle, Check } from 'lucide-react';
import { toast } from 'sonner';

const API_BASE = "https://chatbot2025gkf.onrender.com/api";

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [medrepVisits, setMedrepVisits] = useState<any[]>([]);
  const [adoptionEnquiries, setAdoptionEnquiries] = useState<any[]>([]);
  const [internshipApplications, setInternshipApplications] = useState<any[]>([]);

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    if (!token) {
      toast.error("You are not authenticated");
      onLogout();
      return;
    }

    loadAllData();
  }, []);

  const apiGet = async (endpoint: string) => {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error(`Failed GET ${endpoint}`);
    return res.json();
  };

  const apiPut = async (endpoint: string, body: any) => {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Failed PUT ${endpoint}`);
    return res.json();
  };

  const loadAllData = async () => {
    try {
      setLoading(true);

      const [apps, reps, adoptions, interns] = await Promise.all([
        apiGet("/appointments"),
        apiGet("/medrep"),
        apiGet("/adoption"),
        apiGet("/internship")
      ]);

      setAppointments(apps);
      setMedrepVisits(reps);
      setAdoptionEnquiries(adoptions);
      setInternshipApplications(interns);

    } catch (err) {
      toast.error("Failed to load dashboard");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (type: string, id: string, status: string) => {
    try {
      await apiPut(`/${type}/${id}`, { status });
      toast.success("Status updated successfully");
      loadAllData();
    } catch (err) {
      toast.error("Failed to update status");
      console.error(err);
    }
  };

  const toggleContacted = async (type: string, id: string, currentContacted: boolean) => {
    try {
      const newContactedStatus = !currentContacted;
      await apiPut(`/${type}/${id}`, { 
        contacted: newContactedStatus,
        contactedAt: newContactedStatus ? new Date().toISOString() : null
      });
      toast.success(newContactedStatus ? "Marked as contacted" : "Unmarked as contacted");
      loadAllData();
    } catch (err) {
      toast.error("Failed to update contacted status");
      console.error(err);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
      case 'new':
      case 'applied':
        return 'secondary';
      case 'confirmed':
      case 'scheduled':
      case 'accepted':
        return 'default';
      case 'complete':
      case 'completed':
        return 'outline';
      case 'cancelled':
      case 'rejected':
        return 'destructive';
      case 'in-review':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const isOlderThan24Hours = (createdAt: string, contactedAt: string | null, contacted: boolean) => {
    if (contacted || contactedAt) return false;
    if (!createdAt) return false;
    
    const created = new Date(createdAt);
    const now = new Date();
    const hoursDiff = (now.getTime() - created.getTime()) / (1000 * 60 * 60);
    
    return hoursDiff > 24;
  };

  const getWhatsAppLink = (phone: string, type: string, status: string, name: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    let message = '';

    switch (type) {
      case 'appointment':
        if (status === 'confirmed') {
          message = `Hello ${name}, your appointment has been confirmed. We look forward to seeing you!`;
        } else if (status === 'pending') {
          message = `Hello ${name}, we received your appointment request and will confirm shortly.`;
        } else if (status === 'complete') {
          message = `Hello ${name}, thank you for visiting us. We hope you had a great experience!`;
        }
        break;
      case 'medrep':
        if (status === 'scheduled') {
          message = `Hello ${name}, your visit has been scheduled. Looking forward to meeting you.`;
        } else if (status === 'new') {
          message = `Hello ${name}, we received your visit request and will get back to you soon.`;
        }
        break;
      case 'adoption':
        message = `Hello ${name}, thank you for your interest in adoption. We will review your enquiry and get back to you.`;
        break;
      case 'internship':
        if (status === 'accepted') {
          message = `Hello ${name}, congratulations! Your internship application has been accepted.`;
        } else if (status === 'applied') {
          message = `Hello ${name}, we received your internship application and will review it shortly.`;
        } else if (status === 'rejected') {
          message = `Hello ${name}, thank you for applying. Unfortunately, we cannot proceed with your application at this time.`;
        }
        break;
    }

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  // const handleCall = (phone: string) => {
  //   window.location.href = `tel:${phone}`;
  // };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="pt-30 container mx-auto py-8 px-4 max-w-[1600px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary" />
          <div>
            <h1>Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage all hospital requests</p>
          </div>
        </div>
        <Button variant="outline" onClick={onLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className='p-3'>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{appointments.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {appointments.filter(a => a.status === 'pending').length} pending
            </p>
          </CardContent>
        </Card>
        <Card className='p-3'>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Med Rep Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{medrepVisits.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {medrepVisits.filter(v => v.status === 'new').length} new requests
            </p>
          </CardContent>
        </Card>
        <Card className='p-3'>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Adoption Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{adoptionEnquiries.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {adoptionEnquiries.filter(e => e.status === 'new').length} new enquiries
            </p>
          </CardContent>
        </Card>
        <Card className='p-3'>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Internship Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{internshipApplications.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {internshipApplications.filter(a => a.status === 'applied').length} pending review
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="appointments" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="appointments" className="text-xs sm:text-sm">
            <Calendar className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Appointments</span>
            <span className="sm:hidden">Appts</span>
          </TabsTrigger>
          <TabsTrigger value="medrep" className="text-xs sm:text-sm">
            <Briefcase className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Med Rep</span>
            <span className="sm:hidden">Rep</span>
          </TabsTrigger>
          <TabsTrigger value="adoption" className="text-xs sm:text-sm">
            <Heart className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Adoption</span>
            <span className="sm:hidden">Adopt</span>
          </TabsTrigger>
          <TabsTrigger value="internship" className="text-xs sm:text-sm">
            <GraduationCap className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Internship</span>
            <span className="sm:hidden">Intern</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Patient Appointments</CardTitle>
              <CardDescription>Manage and update appointment statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Check className="w-4 h-4" />
                      </TableHead>
                      <TableHead>Patient</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="hidden lg:table-cell">Department</TableHead>
                      <TableHead className="hidden xl:table-cell">Date & Time</TableHead>
                      <TableHead className="hidden md:table-cell">Reason</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">
                          No appointments found
                        </TableCell>
                      </TableRow>
                    ) : (
                      appointments.map((appointment) => (
                        <TableRow 
                          key={appointment._id}
                          className={isOlderThan24Hours(appointment.createdAt, appointment.contactedAt, appointment.contacted) ? 'bg-yellow-50 hover:bg-yellow-100' : ''}
                        >
                          <TableCell>
                            <Checkbox 
                              checked={appointment.contacted || false}
                              onCheckedChange={() => toggleContacted('appointments', appointment._id, appointment.contacted)}
                            />
                          </TableCell>
                          <TableCell>
                            <div>
                              <div>{appointment.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {appointment.age}y, {appointment.gender}
                              </div>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <a 
                                href={`tel:${appointment.phone}`}
                                className="text-sm hover:text-primary flex items-center gap-1"
                              >
                                <PhoneCall className="w-3 h-3" />
                                {appointment.phone}
                              </a>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-6 px-2 text-xs"
                                  onClick={() => window.open(getWhatsAppLink(appointment.phone, 'appointment', appointment.status, appointment.name), '_blank')}
                                >
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  WhatsApp
                                </Button>
                              </div>
                            </div>
                          </TableCell>

                          <TableCell className="hidden lg:table-cell">{appointment.department || "General"}</TableCell>

                          <TableCell className="hidden xl:table-cell">
                            <div className="text-sm">
                              <div>
                                {appointment.appointmentDate
                                  ? formatDate(appointment.appointmentDate)
                                  : "No preferred date"}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {appointment.doctor || "Doctor not assigned"}
                              </div>
                            </div>
                          </TableCell>

                          <TableCell className="max-w-xs truncate hidden md:table-cell">
                            {appointment.message}
                          </TableCell>

                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </TableCell>

                          <TableCell>
                            <Select
                              value={appointment.status}
                              onValueChange={(value: any) =>
                                updateStatus("appointments", appointment._id, value)
                              }
                            >
                              <SelectTrigger className="w-28 sm:w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="complete">Complete</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>

                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medrep">
          <Card>
            <CardHeader>
              <CardTitle>Medical Representative Visits</CardTitle>
              <CardDescription>Review and schedule rep visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Check className="w-4 h-4" />
                      </TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Representative</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="hidden lg:table-cell">Products</TableHead>
                      <TableHead className="hidden xl:table-cell">Preferred Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {medrepVisits.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">
                          No visits found
                        </TableCell>
                      </TableRow>
                    ) : (
                      medrepVisits.map((visit) => (
                        <TableRow 
                          key={visit._id}
                          className={isOlderThan24Hours(visit.createdAt, visit.contactedAt, visit.contacted) ? 'bg-yellow-50 hover:bg-yellow-100' : ''}
                        >
                          <TableCell>
                            <Checkbox 
                              checked={visit.contacted || false}
                              onCheckedChange={() => toggleContacted('medrep', visit._id, visit.contacted)}
                            />
                          </TableCell>
                          <TableCell>{visit.companyName}</TableCell>
                          <TableCell>{visit.repName}</TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <a 
                                href={`tel:${visit.phone}`}
                                className="text-sm hover:text-primary flex items-center gap-1"
                              >
                                <PhoneCall className="w-3 h-3" />
                                {visit.phone}
                              </a>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-6 px-2 text-xs"
                                  onClick={() => window.open(getWhatsAppLink(visit.phone, 'medrep', visit.status, visit.repName), '_blank')}
                                >
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  WhatsApp
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate hidden lg:table-cell">{visit.productList}</TableCell>
                          <TableCell className="hidden xl:table-cell">
                            <div className="text-sm">
                              <div>{visit.preferredDate}</div>
                              <div className="text-xs text-muted-foreground">{visit.preferredTime}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(visit.status)}>
                              {visit.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={visit.status}
                              onValueChange={(value: any) =>
                                updateStatus('medrep', visit._id, value)
                              }
                            >
                              <SelectTrigger className="w-28 sm:w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="scheduled">Scheduled</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="adoption">
          <Card>
            <CardHeader>
              <CardTitle>Adoption Enquiries</CardTitle>
              <CardDescription>Review and manage adoption requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Check className="w-4 h-4" />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="hidden lg:table-cell">Address</TableHead>
                      <TableHead className="hidden md:table-cell">Message</TableHead>
                      <TableHead className="hidden xl:table-cell">Created</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {adoptionEnquiries.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">
                          No enquiries found
                        </TableCell>
                      </TableRow>
                    ) : (
                      adoptionEnquiries.map((enquiry) => (
                        <TableRow 
                          key={enquiry._id}
                          className={isOlderThan24Hours(enquiry.createdAt, enquiry.contactedAt, enquiry.contacted) ? 'bg-yellow-50 hover:bg-yellow-100' : ''}
                        >
                          <TableCell>
                            <Checkbox 
                              checked={enquiry.contacted || false}
                              onCheckedChange={() => toggleContacted('adoption', enquiry._id, enquiry.contacted)}
                            />
                          </TableCell>
                          <TableCell>{enquiry.name}</TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <a 
                                href={`tel:${enquiry.phone}`}
                                className="text-sm hover:text-primary flex items-center gap-1"
                              >
                                <PhoneCall className="w-3 h-3" />
                                {enquiry.phone}
                              </a>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-6 px-2 text-xs"
                                  onClick={() => window.open(getWhatsAppLink(enquiry.phone, 'adoption', enquiry.status, enquiry.name), '_blank')}
                                >
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  WhatsApp
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate hidden lg:table-cell">{enquiry.address || 'N/A'}</TableCell>
                          <TableCell className="max-w-xs truncate hidden md:table-cell">{enquiry.message}</TableCell>
                          <TableCell className="text-sm hidden xl:table-cell">{formatDate(enquiry.createdAt)}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(enquiry.status)}>
                              {enquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={enquiry.status}
                              onValueChange={(value) =>
                                updateStatus('adoption', enquiry._id, value)
                              }
                            >
                              <SelectTrigger className="w-28 sm:w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="in-review">In Review</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="internship">
          <Card>
            <CardHeader>
              <CardTitle>Internship Applications</CardTitle>
              <CardDescription>Review and process applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Check className="w-4 h-4" />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="hidden lg:table-cell">Area of Interest</TableHead>
                      <TableHead className="hidden xl:table-cell">Duration</TableHead>
                      <TableHead className="hidden xl:table-cell">Created</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {internshipApplications.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">
                          No applications found
                        </TableCell>
                      </TableRow>
                    ) : (
                      internshipApplications.map((application) => (
                        <TableRow 
                          key={application._id}
                          className={isOlderThan24Hours(application.createdAt, application.contactedAt, application.contacted) ? 'bg-yellow-50 hover:bg-yellow-100' : ''}
                        >
                          <TableCell>
                            <Checkbox 
                              checked={application.contacted || false}
                              onCheckedChange={() => toggleContacted('internship', application._id, application.contacted)}
                            />
                          </TableCell>
                          <TableCell>{application.name}</TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <a 
                                href={`tel:${application.phone}`}
                                className="text-sm hover:text-primary flex items-center gap-1"
                              >
                                <PhoneCall className="w-3 h-3" />
                                {application.phone}
                              </a>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-6 px-2 text-xs"
                                  onClick={() => window.open(getWhatsAppLink(application.phone, 'internship', application.status, application.name), '_blank')}
                                >
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  WhatsApp
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">{application.areaOfInterest}</TableCell>
                          <TableCell className="hidden xl:table-cell">
                            <div className="text-sm">
                              <div>Start: {application.startDate}</div>
                              <div className="text-xs text-muted-foreground">End: {application.endDate}</div>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm hidden xl:table-cell">{formatDate(application.createdAt)}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(application.status)}>
                              {application.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={application.status}
                              onValueChange={(value) =>
                                updateStatus('internship', application._id, value)
                              }
                            >
                              <SelectTrigger className="w-28 sm:w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="applied">Applied</SelectItem>
                                <SelectItem value="accepted">Accepted</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
