import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.crepes",
  appName: "CrepesDS",
  webDir: "..",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https",
  },
};

export default config; 