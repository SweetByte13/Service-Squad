#!/usr/bin/env python3

from random import randint, choice as rc
from faker import Faker
from flask import request, make_response
from config import db, app
from models import Opportunity, Organization, Volunteer

fake = Faker()

def clear_database():
    with app.app_context():
        print("Deleting all records...")
        Opportunity.query.delete()
        Organization.query.delete()
        Volunteer.query.delete()
        db.session.commit()

def seed_database():
    with app.app_context():
        print("Clearing db...")
        Volunteer.query.delete()
        Organization.query.delete()
        Opportunity.query.delete()
    
        print("Seeding volunteers...")
        print("Creating volunteers...")
        volunteers = []
        a=Volunteer(
        first_name='John',
        last_name='Doe',
        email='johndoe@example.com',
        phone_number='123-456-7890',
        username='johnDoe123',
        _password_hash='password123!',
        interests='Cooking, Gardening',
        skills='Python, Web Development',
        hours_wanted=10,
        zipcode='33128'
    )
        b=Volunteer(
        first_name='Jane',
        last_name='Smith',
        email='janesmith@example.com',
        phone_number='098-765-4321',
        username='janeSmith456',
        _password_hash='password456@',
        interests='Reading, Hiking',
        skills='JavaScript, UX Design',
        hours_wanted=15,
        zipcode='33127'
    )
        c=Volunteer(
        first_name='Alice',
        last_name='Johnson',
        email='alicejohnson@example.com',
        phone_number='111-222-3333',
        username='aliceJohnson789',
        _password_hash='password789#',
        interests='Photography, Traveling',
        skills='Java, Android Development',
        hours_wanted=20,
        zipcode='33126'
    )
        d=Volunteer(
        first_name='Bob',
        last_name='Williams',
        email='bobwilliams@example.com',
        phone_number='444-555-6666',
        username='bobWilliams012',
        _password_hash='password012$',
        interests='Music, Sports',
        skills='C++, Game Development',
        hours_wanted=25,
        zipcode='33125'
    )
        e=Volunteer(
        first_name='Charlie',
        last_name='Brown',
        email='charliebrown@example.com',
        phone_number='777-888-9999',
        username='charlieBrown345',
        _password_hash='password345%',
        interests='Art, Technology',
        skills='Ruby, Backend Development',
        hours_wanted=30,
        )
        
        f=Volunteer(
        first_name='Diana',
        last_name='Davis',
        email='dianadavis@example.com',
        phone_number='000-111-2222',
        username='dianaDavis678',
        _password_hash='password678&',
        interests='Fashion, Fitness',
        skills='PHP, Frontend Development',
        hours_wanted=35,
        zipcode='33123'
    )
    
        volunteers.append(a)
        volunteers.append(b)
        volunteers.append(c)
        volunteers.append(d)
        volunteers.append(e)
        volunteers.append(f)
        db.session.add_all(volunteers)
        db.session.commit()
        
        print("Seeding organizations...")
        print("Creating organizations...")
        organizations = []
        g=Organization(
        name='Food Bank Foundation',
        website='www.foodbankfoundation.com',
        category='Non-profit'
    )
        h=Organization(
        name='Community Clean Up Crew',
        website='www.cleanupcrew.com',
        category='Environment'
    )
        i=Organization(
        name='Tech Tutors',
        website='www.techtutors.com',
        category='Education'
    )
        j=Organization(
        name='Animal Rescue Network',
        website='www.animalrescue.com',
        category='Animal Welfare'
    )
        k=Organization(
        name='Healthcare Helpers',
        website='www.healthcarehelpers.com',
        category='Healthcare'
    )
        l=Organization(
        name='Art Advocates',
        website='www.artadvocates.com',
        category='Arts'
    )
        organizations.append(g)
        organizations.append(h)
        organizations.append(i)
        organizations.append(j)
        organizations.append(k)
        organizations.append(l)
        db.session.add_all(organizations)
        db.session.commit()
        
        print("Seeding opportunities...")
        print("Creating opportunities...")
        opportunities = []
        m=Opportunity(
        title='Food Drive Coordinator',
        description='Organize and manage food drives in local communities.',
        remote_or_online=False,
        category='Non-profit',
        dates='04/15/2023',
        duration='04/15/2023 06/15/2023',
        organization_id=g.id,
        volunteer_id=c.id
    )
        n=Opportunity(
        title='Online Tutor',
        description='Provide online tutoring sessions in various subjects for students.',
        remote_or_online=True,
        category='Education',
        dates='05/20/2023',
        duration='05/20/2023 07/20/2023',
        organization_id=i.id,
        volunteer_id=a.id
    )
        o=Opportunity(
        title='Animal Shelter Helper',
        description='Assist with daily tasks at the animal shelter, including feeding and walking animals.',
        remote_or_online=False,
        category='Animal Welfare',
        dates='06/25/2023',
        duration='06/25/2023 08/25/2023',
        organization_id=j.id,
        volunteer_id='null'
    )
        p=Opportunity(
        title='Healthcare Assistant',
        description='Support healthcare professionals in providing care to patients.',
        remote_or_online=False,
        category='Healthcare',
        dates='07/30/2023',
        duration='07/30/2023 09/30/2023',
        organization_id=k.id,
        volunteer_id='null'
    )
        q=Opportunity(
        title='Art Workshop Facilitator',
        description='Conduct art workshops for children and adults in the community.',
        remote_or_online=False,
        category='Arts',
        dates='08/04/2023',
        duration='08/04/2023 10/04/2023',
        organization_id=l.id,
        volunteer_id='null'
    )
        r=Opportunity(
        title='Environmental Advocate',
        description='Promote environmental awareness and conservation efforts in the community.',
        remote_or_online=True,
        category='Environment',
        dates='09/09/2023',
        duration='09/09/2023 11/09/2023',
        organization_id=h.id,
        volunteer_id=d.id
    )
        s=Opportunity(
        title='Coding Mentor',
        description='Mentor individuals who are learning to code.',
        remote_or_online=True,
        category='Technology',
        dates='10/14/2023',
        duration='10/14/2023 12/14/2023',
        organization_id=i.id,
        volunteer_id='null'
    )
        t=Opportunity(
        title='Community Outreach Volunteer',
        description='Assist in planning and executing community outreach events.',
        remote_or_online=False,
        category='Community',
        dates='11/19/2023',
        duration='11/19/2023 01/19/2024',
        organization_id=g.id,
        volunteer_id='null'
    )
        opportunities.append(m)
        opportunities.append(n)
        opportunities.append(o)
        opportunities.append(p)
        opportunities.append(q)
        opportunities.append(r)
        opportunities.append(s)
        opportunities.append(t)
        db.session.add_all(opportunities)
        db.session.commit()
        
if __name__ == '__main__':
    seed_database()

# @app.cli.command('seed_db')
# def seed_db():
#     print("Starting seed...")

#     # Make a request to the Volunteer Connector API
#     response = request.get('https://www.volunteerconnector.org/api/search/')
#     if response.status_code == 200:
#         data = response.json()
#     else:
#         print("Failed to retrieve data from the API")
#         exit(1)

# #     # Seed the database with the retrieved data
# #     for item in data:
# #         opportunity = Opportunity(organization_name=item['organization_name'], organization_email=item['organization_email'])
# #         db.session.add(opportunity)
# #         db.session.commit()

# #     print("Seeding completed successfully!")
