import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jfdpjyscfavtdoguytkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZHBqeXNjZmF2dGRvZ3V5dGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODM2NjEsImV4cCI6MjA0OTc1OTY2MX0.AO2KA51zXE5Wed7RtY4ZgoNI2Ig6F0QwhZVT3QJ3FKg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
