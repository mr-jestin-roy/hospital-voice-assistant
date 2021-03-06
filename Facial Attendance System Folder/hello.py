import streamlit as st
# To make things easier later, we're also importing numpy and pandas for
# working with sample data.

from datetime import datetime
import pandas as pd

danger_html="""  
      <div style="background-color:#F08080;padding:10px >
       <h2 style="color:black ;text-align:center;"> Your forest is in danger</h2>
       </div>
    """

def main():
    st.title("Team Code Bros")
    st.subheader("Facial Recognition based")
    html_temp = """
        <div style="background-color:#025246 ;padding:10px">
        <h2 style="color:white;text-align:center;">ATTENDANCE MANAGEMENT SYSTEM</h2>
        </div>
        """
    safe_html = """  
          <div style="background-color:#F4D03F;padding:10px >
           <h2 style="color:white;text-align:center;"> Updated Attendance File</h2>
           </div>
        """
    st.markdown(html_temp, unsafe_allow_html=True)
    st.image('mllogo.jpeg', width=700)
    name = st.text_input("Admin's Name","Type Here")
    st.file_uploader('File uploader')
    now = datetime.now()
    dtString = now.strftime('%d:%B:%Y:%H:%M:%S')



    if st.button("Start"):
        st.success('Attendance is marked in Attendance.csv')
        df = pd.read_csv("Attendance.csv")  # read a CSV file
        st.write("Updated at ",dtString," by ",name)
        st.markdown(safe_html,unsafe_allow_html=True)
        st.write(df)

if __name__=='__main__':
    main()