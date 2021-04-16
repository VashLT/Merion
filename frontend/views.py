from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def members(request):
    MEMBERS = [
        (
            'Jose Jaime Silva Martinez - 2183075',
            """
                I am a nineteen years old Systems Engineering student, currently coursing sixth semester. I am
                interested on Software Development and  AI. Self-learning programming languages
                and frameworks is one of my pattions, but I also care about nutrition and exercise.
                This year I am learning React jointly with Django to complement my Frontend
                skills.
            """,
            'images/member_jose.jpg',
            'https://github.com/VashLT'
        ),
        (
            'Javier Eduardo Tarazona Castellanos - 2172015',
            """
                I am 26 years old I was born in Malaga Santander I am a sixth semester systems 
                engineering student interested in various programming languages and in learning 
                everything necessary to be a competent engineer in the world of work, I also really 
                like athletics and swimming.
            """,
            'images/member_javier.jpg',
            '#'

        ),
        (
            'Gabriel Felipe Vega Ochoa - 2170122',
            """
                I'm a System Engineering student with special interest in open source development, AI and IoT
                As a developer I have been interested in scientific computing and data science, 
                however I have experience in web development with React.js, Node.js and other frameworks, 
                as well as in mobile development. I'm a fan of soccer, sports in general, and music.
            """,
            'images/member_gabriel.jpg',
            'https://github.com/ga-vo'

        ),
        (
            'Nicolas Andres Velasquez Martinez - 2171065',
            """
                I am a petroleum engineer with a passion for programming and software development. 
                I am a sixth semester student of systems engineering and my favorite hobby is playing chess.
            """,
            'images/member_cristian.jpg',
            'https://github.com/CristianERP'

        ),
        (
            'Nicolas Andres Velasquez Martinez - 2171065',
            """
                I am a systems engineering student who loves web development and AI.
                Platzi and coursera have made my life easier, interested in sports, physical exercise
                and travelling.
            """,
            'images/member_nicolas.jpg',
            'https://github.com/nockyy'

        )

    ]
    return render(request, "members.html", {"MEMBERS": MEMBERS})


def labs(request):
    return render(request, "labs.html")
