import Stack from 'react-bootstrap/Stack';
import NavBar from "./NavBar";

function About() {
  return (
    <div id="about">
        <NavBar />
        <header className="about">
            About ServiceSquad
        </header>
        <div className="container">
            <div className="left-div">
                <h2>Beginnings</h2>
                <p>In 2014, two high school students embarked on a journey that would change their lives and the lives of many others. 
                    These students were in pursuit of service opportunities to fulfill the requirements of the International Baccalaureate (IB) Diploma Programme’s CAS element, which stands for “Community, Activity, Service". 
                    As they navigated through the maze of community service, they realized the challenges faced by many in finding suitable opportunities. 
                    This sparked an idea - what if there was a platform that could seamlessly connect volunteers with organizations in need? 
                    Thus, the concept of ServiceSquad was born.
                    </p>
                <br></br>
                <h2>The Growth </h2>
                <p id='aboutss'>Fast forward to today, ServiceSquad has grown exponentially. 
                    It is now utilized by 143 different organizations nationwide, operates in 37 different localities, and has successfully connected 627 individuals with service opportunities in their neighborhoods. 
                    But ServiceSquad is not just about numbers. 
                    It’s about the impact each volunteer makes in their community, the difference each organization can make with the right resources, and the collective change we can bring about when we work together. 
                    </p>
                    <br></br>
                <h2 >What They Do </h2>
                <p>ServiceSquad serves as a bridge between volunteers and organizations. 
                    It provides a platform where individuals looking for service opportunities can connect with organizations that need volunteers. 
                    Whether it’s a local food bank in need of hands, a community center looking for tutors, or a charity event in need of organizers, ServiceSquad brings them all under one roof. 
                    It simplifies the process of finding and signing up for volunteer opportunities, making community service more accessible and efficient.
                    </p>
                    <br></br>
                <h2>The Impact </h2>
                <p>The impact of ServiceSquad extends beyond just connecting volunteers with organizations. 
                    It’s about empowering individuals to make a difference in their communities. 
                    It’s about fostering a culture of service and altruism. 
                    And most importantly, it’s about creating a ripple effect of positive change. 
                    Every volunteer opportunity filled through ServiceSquad is a step towards a better world.
                    </p>
                    <br></br>
                <h2>The Future </h2>
                <p>ServiceSquad is growing, and its potential is limitless. 
                    It’s a tool that can be used anywhere and provides the framework for organizations and volunteers to connect. 
                    As it expands to more localities and partners with more organizations, it continues to redefine what community service looks like. 
                    The future of ServiceSquad is bright, filled with countless more connections, opportunities, and impacts.
                    </p>
                    <br></br>
                <h2>In Conclusion </h2>
                <p>ServiceSquad started as a simple idea in the minds of two high school students. 
                    Today, it stands as a testament to the power of community, service, and innovation. 
                    It’s not just a platform, but a movement that is transforming the landscape of community service. 
                    And this is just the beginning. 
                    As ServiceSquad continues to grow and evolve, it will keep striving to make service opportunities more accessible and impactful, one connection at a time.
                    </p>
            </div>
            <div className="right-div">
                <Stack gap={3}>
                    <h3 className="right-div-header">Impact</h3>
                    <div className="right-div-stack">627 Volunteers</div>
                    <div className="right-div-stack">143 Organizations</div>
                    <div className="right-div-stack">37 Communities</div>
                </Stack>
            </div>
        </div>
    </div>
    )
}

export default About;