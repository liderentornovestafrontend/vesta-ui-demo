const { execSync } = require("child_process");
const os = require("os");

console.log("🛠  Iniciando compilación...");

// Detectar sistema operativo
const isWindows = os.platform() === "win32";

// Comandos para eliminar y recrear `dist/`
if (isWindows) {
    execSync("if exist dist rmdir /s /q dist", { stdio: "inherit" });
    execSync("mkdir dist", { stdio: "inherit" });
    execSync("xcopy /E /I /Y src dist", { stdio: "inherit" });
    execSync("xcopy /E /I /Y demos dist\\demos", { stdio: "inherit" });
} else {
    execSync("rm -rf dist && mkdir -p dist", { stdio: "inherit" });
    execSync("cp -r src/* dist/", { stdio: "inherit" });
    execSync("cp -r demos/ dist/demos/", { stdio: "inherit" });
}

console.log("✅ Compilación completada.");
