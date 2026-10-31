import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Shield, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const API_BASE = "https://chatbot2025gkf.onrender.com/api/auth";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // store token
      localStorage.setItem("admin_token", data.token);

      toast.success("Login successful!");
      onLoginSuccess();
    } catch (err: any) {
      toast.error("Login failed", { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: signupData.username,
          email: signupData.email,
          password: signupData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast.success("Account created! Please login.");
    } catch (err: any) {
      toast.error("Signup failed", { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-100 max-w-md">
        <CardHeader className="text-center">
          <Shield className="w-8 h-8 mx-auto text-primary" />
          <CardTitle className="text-2xl">Admin Portal</CardTitle>
          <CardDescription>Login to manage the hospital</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid grid-cols-2 w-full mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* LOGIN */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full mb-10" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : "Login"}
                </Button>
              </form>
            </TabsContent>

            {/* SIGNUP */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input
                    required
                    value={signupData.username}
                    onChange={(e) =>
                      setSignupData({ ...signupData, username: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    required
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    required
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    required
                    value={signupData.confirmPassword}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
