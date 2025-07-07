import { Briefcase, Code, User } from "lucide-react";
export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/08/19/20/36/pig-4417320_1280.jpg"
              alt="Pig"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <Code className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
