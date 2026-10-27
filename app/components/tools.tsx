import React from "react";

const Tools = () => {
  return (
    <div className="card  bg-base-200  shadow-sm rounded-xl min-w-0">
      <div className="card-body">
        <h2 className="card-title">Tools</h2>

        <section className="w-full flex flex-col gap-2">
          <div className="border border-gray-400 rounded-xl p-4 flex items-start gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              alt="Visual Studio Code"
              className="h-12 w-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Visual Studio Code</h3>
              <p className="text-sm text-gray-500 mt-1">
                A lightweight code editor used for writing, debugging, and
                managing web and mobile application projects.
              </p>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl p-4 flex items-start gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netbeans/netbeans-original.svg"
              alt="Apache NetBeans"
              className="h-12 w-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Apache NetBeans</h3>
              <p className="text-sm text-gray-500 mt-1">
                An integrated development environment (IDE) used for writing,
                testing, and debugging applications, especially Java projects.
              </p>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl p-4 flex items-start gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              alt="Postman"
              className="h-12 w-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Postman</h3>
              <p className="text-sm text-gray-500 mt-1">
                An API development and testing tool used to send HTTP requests,
                inspect responses, and verify communication between applications
                and backend services.
              </p>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl p-4 flex items-start gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antigravity/antigravity-original.svg"
              alt="Antigravity"
              className="h-12 w-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Antigravity</h3>
              <p className="text-sm text-gray-500 mt-1">
                An AI-powered development environment used to assist with
                coding, explore codebases, generate implementations, and
                automate development tasks with AI agents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tools;
