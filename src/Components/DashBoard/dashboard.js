import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { Link, Navigate } from "react-router-dom";
import { LineChart, Line } from "recharts";
import NavBar from "../NavBar/navbar";
import axios from "axios";

export default function DashBoard() {
  const data = [
    {
      uv: 40,
    },
    {
      uv: 120,
    },
    {
      uv: 200,
    },
    {
      uv: 30,
    },
    {
      uv: 180,
    },
    {
      uv: 100,
    },
    {
      uv: 340,
    },
  ];
  const [userdata, setuserdata] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:5000/dashboard", {
          params: { username: "sainathr19" },
        })
        .then((res) => {
          setuserdata(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchdata();
  }, []);

  const logout = () => {
    localStorage.clear();
    <Navigate to="/" replace={true} />;
  };
  return (
    <>
      <NavBar />
      <div className="container">
        {/* Sidebar Starts */}
        <div className="sidebar">
          <div className="welcome">
            <h3>WeCare</h3>
          </div>
          <div className="menu">
            <Link to="/" className="menuoptions">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFjdGl2aXR5Ij48cGF0aCBkPSJNMjIgMTJoLTRsLTMgOUw5IDNsLTMgOUgyIi8+PC9zdmc+"
                alt=""
              />
              <h4>Dashboard</h4>
            </Link>
            <Link to="/" className="menuoptions">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+"
                alt=""
              />
              <h4>Profile</h4>
            </Link>
            <Link to="/" className="menuoptions">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
                alt=""
              />
              <h4>Settings</h4>
            </Link>
            <Link to="/" className="menuoptions">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2VzLXNxdWFyZSI+PHBhdGggZD0iTTE0IDlhMiAyIDAgMCAxLTIgMkg2bC00IDRWNGMwLTEuMS45LTIgMi0yaDhhMiAyIDAgMCAxIDIgMnY1WiIvPjxwYXRoIGQ9Ik0xOCA5aDJhMiAyIDAgMCAxIDIgMnYxMWwtNC00aC02YTIgMiAwIDAgMS0yLTJ2LTEiLz48L3N2Zz4="
                alt=""
              />
              <h4>Support</h4>
            </Link>
            <Link onClick={logout} to="/" className="menuoptions">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvZy1vdXQiPjxwYXRoIGQ9Ik05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNCIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIxIDEyIDE2IDciLz48bGluZSB4MT0iMjEiIHgyPSI5IiB5MT0iMTIiIHkyPSIxMiIvPjwvc3ZnPg=="
                alt=""
              />
              <h4>Logout</h4>
            </Link>
          </div>
        </div>
        {/* Sidebar ends */}
        <div className="content">
          {/* topbox starts */}
          <div className="top">
            <div className="onetwo">
              <div className="one">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEVmZmb////u7u5gYGBYWFhjY2NdXV3x8fH19fVfX19aWlrz8/NVVVXm5ubGxsZ0dHRubm7V1dXe3t6wsLCampqRkZGioqK+vr6JiYmqqqrPz89paWmAgIC3t7eNjY3AwMB6enrJY5WRAAAMzUlEQVR4nOWdaYOqIBSGXQAB99Kypqb+/6+8mKJWLiiH0rnvt7uM4yOHs7BatnHRMI2upywvLnHyY1nWTxJfijw7XaM0pOZ/vWXy4eF5n8cIcUKYi4UsqfIPLiOEIxTn+3No8iVMETrR4S7QWAerXxgzAXo/RKYwTRCGx5wh4k6xPXG6BLH8aIISnPCcYcTmwHUwGcLZGfqFQAlpVIi2W0QnJdqyiED9DyBhVARkWeO9NCUJigjutaAIdxkHwZOQPNsBvRkM4TFBesb5LpcnR5B3AyB0Dgiw+Vphgg7OCgjD3wC6+Vq5wa+2sWoS7i7IRPO1wuiiyahFaJwPglGD0CkC83wPxqDQ6I+LCenhQ3wVY7Y4C1hKeOTm/EufXH79KOEuIR/lK0WSZd1xEWH2QQNtJUz1Q4Rn97MG2splCyqP+YQ5+hJfKZQbJ0y/1oCVXDc1S3gKvspXKjgZJKTx513ou0jsmyJM+Tdc6Lswn2OpMwj337dQqWBvgrDg3+bqiBfghDT5rg99lZuoJqqKhOHCAUJzwkxxcFWNMF1PF2wVqPkbJcJojYACUWnMUYXwuk5AgahSUSkQ7r+ZiI4LKUSNacLTegEF4nQKN0m4akAVxCnCFZtopUlDnSC8rh1QIE64m3HClYaJZ00EjVHCVQb6d42H/jHCcBuAAnEsgRshpOzbb64sNpKGjxAma0u2h4WTJYTFusqlcbnD9eIg4X5NBe+0+GBYHCLciBttNehQBwjptlqwFB/wNgOE8Xa8jBSO5xCe1jAuOlekPwnvJdxcJ6wU9E6/9RJuKU505aoS5psl7JuZ6iE8r79iGhLqmV/sIdxOOvquHjt9J8y2aqOl3PeJ8DfC3Tb9qNS7P30j3FBF0af3KuOV8LjFWN8VeV2z+UK4wXz0Va/56QvhYctuptKrs3kmdLbtZioFzghhsW03UwkXw4QbjxRSzxHjifBisgnLjU68UrkNyuRvugwR7swlpJjxOLued6HjOOEuumYxNzhvjnYDhMaakPHfW0h93/OcUp7n+zQ8FtxUBvzUiB3C0FATEmvv0IqtK4+Ge8tQfoHCXsJfI03IrCP13/Aq+f4VG2lH/NtHaCQWYnTyh/gejN7ByHL/TkxsCU2kMyze0SfLrNT9K7pLDDSje+ghNNALedbpf55Pvd05ukXnnUf97t/nBpJh9E5ooKhA17YBfXp+bJstVW6KPXc6JzUwld6WGA0hfF2IogaQhieLd6I8djk+he0/38AR2zpREu7ALaUF9J1DT+hj/ODIdqQROGIT9SUh+OgMOtLm9QdCAsPNR6BX6C/cFFGSEPoXkEPz8tlw+6Cs/V/QHpU/E0bAfgZf5Kt7l7FXZ5emL96BHQGJngihC0MSyjePx83fjeWXCIHNSJaJFSEFzmfI0ZctM9W/3Xvd2v4V2I4C2iEENlIs31qldzHZFylwwKrN1DJhpDytUhZfKQjwW9Xg3hnWTmsztQxkbK2bUfOPzJCzQS3hGdZI+dmrbVQtyLq1nXrAnYWcG0LgcP9TN6FySY1qz+vDtmEV9B+EwA8+Vf2KKtdjbp0e+MAVHJaEwMMXfFcPx6jbHKl/IoX1NY/BjJLwCJsw/czvVSSqey6sNbFjTZiDPtfN/Fl+pvqZ6qtQ2FfBeU0I24SszmforJ+qO+IV+F0qQuhuWIf7WY+tvamXwsYL5DwIgaMQrzPpWUGW1CEUOP0uEzcLfJAN147mNsfg2K3O82C/djnkJghhcyUcL+lS7Fp33h/IdxElwIPQTFLq72cR7n1TqallA5t+Q7isDYEJeSgIgdNuWRv6s/IIdqxDPvDCVpF8W/Ysa1JQsqRQkL4UOKkR1i8IYdMI8bJ1PTtrBJbv6hoRerAmF4TQC565LIXmvKxLF3wWBeFYEEKPNjcGN2NKGf+aqYFLZ2pRaELp+OeEC+lK/RP40Du1oIcpLVzUJf6MhQ+yyJ/T7mrioQWc61pNYjrjdaWRgjsa0WdSC9zym3LWi1TfF9XlyLxcVvFlLOCKzOq0iGr4buwa3khFD7fA+3YbL7xUrSeiemBnXkmpJvdkZfBLIdzTjEH9cq+L/O8GFkvgzIJOaUqR2m84nsJURDPJAV3+Vk/PLRMLLuX4p8hRJv0YtuTnmDN0pSxcWEYWszU9y5/qitiV/9UzsnAQX6zYwGM7luePH5+FsQQEL5xqxVZi4rEW2TeIu59h42P3sAE8mVmpmFiwAyONUCpXknhOPrB0DaNmOYPjm9ptZYhPiDWt49Bz0nNYNOb3dtGbgktanfBPi+jRW8yfFj5jhi7ndtGbF07eobBCdREFY3qIEWGuEGOc3/e77qK+0DIIaM5OsbXrLC31fBqej6fD4bC/pc7TolqaGlzY/mPIlz6Eebt2r6Z86HmBqUNvJrciJWbioRTPvPcF3s8SrtboXqvYTE7TiDeDaEOAu8AooMhpTG4EYu4pnGzD8MQM7ssVeamJ2qKSS/bO2Cp2Kd85aV5sMiJRWxioD6tHo0yJr2LMTB3QL+pDAzV+KZakz360dKRUyvdfjJemJlbsW48aH36cphQ6PDP41EuPh997IqJkcv89HFPveZ+J548stNUQuxoYaytvF3kKhD7dXQvOy3u7qn/GLuOkuIZPe4VoZOKYYhIZGC8t87VO+/je8d53A1SZmt66G2pEnQWPSFL4MW/LvTtt2whH6Q7eQoMJ7rpbb2pB8QLxEH7ewr10E+79RLBj7rVTYniTS4rnClHwuSf33tkMkyrcEkHijtf1oNezI/D5Qxy3LUjV9qVhdOr4Jdil0I/5Q+ClZE2a5oV31UBELk77U6B2+pgDBp3Hl3MspWecUbZ3SsnJ8cdZeszjQ67F4FfFUcRXYdKMXNE94As91mIAhotmEmlBS/AWEbCge6ynAXSmTO6UWbLigDRjwyFcIyLYdW3NThnhLuY/s53AgNs9U69rg5rTaofylw3Q6/58j+q1iVC5d+NH6WGZe24mEsF2z9TrSx2YjtjslPEWD9C33wjI2dRrhIHWecvVz46/uETACXAjMsi1+k0v8jUmkci+2dUH8k455H4LcpPOXufzy01e3g3COTT7LUCWQLiNm9FxzewkAw7EV2/2zEDse3KbPct6H5/JDwUxqY8h967JHXm6e0Jk1jBvM0O/OnvXAJ7GpIvQrO9ah6Vvpp39h/qpKc7rBaLau8/kMg6qf1xOZw+p/j5guAWizfJU7YHcp33A2ombDPf6cUymRvrW8LSXW3s/PpfBUD/wIBkSdQmf9uPrmqncCgThAYk0B80C4/lMBV0zlY5m3lagfjXbZzSTyZdzMTTPNmk2NwNEVrkHVXfb88vZJppBv/nuAFWPHOzRdKZv59PobeWQ2wchNtc1fVpv0ffbGUN650SRqG5DiLKu3qLpa/mG93Oi9M76YlFYCYKQONWzIp027DnrSy9zY/W5nTrPaFQ/S89I7XfCP3CEcKveM/f+xBnCUr3nJho6+/Ir6j/70tj5pV9Q0H9+qdljhD+poTNoTZ4j/FkNniP8Vxpx+Czo/+A8779/JvvfiImj5+pv+wqWSuN3I/wH91vY0MczflxTd5T8B/fMbD1iKNwVtG1no3Lf03bvlSuldGfXf3Dv2t+/O2+7dqp8/+FW/emMOyz//j2k/8FdslvMT7k/i3B718nOvdP5P7iX+z+4W31TVcZ7RaFESLdzqSwbuHV8gtAOt+JtukPcswi34lAH3eg0oR1tATGIRhnGCe3r+ispdB1HmCC0DVw2BSs0GAgVCe3TuhFRf7o9h3DdiNOACoRrNtRJE1UjtK9r9ajBhJNRJlxr0JgIE3MI1xn6xwP9TEI7NHi37TJhNpaqzSe0abKuYspNRpLtRYSiXlxTScyH68HlhPZ+PZ0xUIgSCwjteduzzQlzNR8zn9Cm8RrGUUk8MKoGQChSuO9bajCdqOkQ2jv8XZ/qur1D94CEtp1/M01FfbNL0IT22f1WM7qsZ37QAKFtZ8E3nCoO3qewTRHaO4WTdaBFkrk9UIfQto/8s6bq8td1MqYJbfpJUxUGqpqGwhHatlN8iBEHhTP9OgYIRXe8mDrusMuHLss6IARhyWi4HXX5tAlFbfwbmPM5bvCrWOcaJBT98YAGT9XTESbooNH/AAmFjgmCbkiXJ0vjw7NgCEWHzDhgQ2LCM83u1wiKUCgqAhBITIJCaZxQTYCEIguICqR5JLBLUBEtju59AiUsdc5w32mlSo3HEM4WVA/jAicUCo85E20568w90XYsP2qHhh6ZICzlRIc74oRNHp6IMSMc3Q+RCbpSpggfCs/7PEYClJRnCHdgyz+4jAg0FOf7sym4h4wSVqJhGl1PWV5c4qTczf6TxJciz07XKA1BfUq//gG9saUmXhHQVAAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="two">
                <p>{userdata.name}</p>
                {/* <Link className="pbutton" to="/">
                  <div className="profilelink">VIEW PROFILE</div>
                </Link> */}
              </div>
            </div>
            <div className="twothree">
              <div className="left">
                <div className="item">
                  <h4>Sex : </h4>
                  <h4>Age : </h4>
                  <h4>Blood : </h4>
                </div>
                <div className="data">
                  <h4>{userdata.sex}</h4>
                  <h4>{userdata.age}</h4>
                  <h4>{userdata.bgroup}</h4>
                </div>
              </div>
              <div className="right">
                <div className="item">
                  <h4>Last Checkup : </h4>
                  <h4>Device Status : </h4>
                  <h4>Appointments : </h4>
                </div>
                <div className="data">
                  <h4>{userdata.lcheckup}</h4>
                  <h4 id="status">Active</h4>
                  <h4>4</h4>
                </div>
              </div>
            </div>
          </div>
          {/* topbox ends */}
          {/* middlebox starts */}
          <div className="middle">
            <div className="sys">
              <div className="upper">
                <p>SYS</p>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0Ij48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaIi8+PC9zdmc+"
                  alt=""
                />
              </div>
              <div className="sysreading">
                <p className="reading">123</p>
                <p className="units">mmHg</p>
              </div>
            </div>
            <div className="sys">
              <div className="upper">
                <p>DIA</p>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0Ij48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaIi8+PC9zdmc+"
                  alt=""
                />
              </div>
              <div className="sysreading">
                <p className="reading">123</p>
                <p className="units">mmHg</p>
              </div>
            </div>
            <div className="pw">
              <div className="pulse">
                <div className="upper">
                  <p>PULSE</p>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFjdGl2aXR5Ij48cGF0aCBkPSJNMjIgMTJoLTRsLTMgOUw5IDNsLTMgOUgyIi8+PC9zdmc+"
                    alt=""
                  />
                </div>
                <div className="pulsereading">
                  <p className="reading">123</p>
                  <p className="units">BPM</p>
                </div>
              </div>
              <div className="pulse">
                <div className="upper">
                  <p>WEIGHT</p>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdhdWdlIj48cGF0aCBkPSJtMTIgMTQgNC00Ii8+PHBhdGggZD0iTTMuMzQgMTlhMTAgMTAgMCAxIDEgMTcuMzIgMCIvPjwvc3ZnPg=="
                    alt=""
                  />
                </div>
                <div className="pulsereading">
                  <p className="reading">123</p>
                  <p className="units">KG</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomecg">
            <p>ECG Data</p>
            <div>
              <LineChart width={1100} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#000000"
                  strokeWidth={1}
                />
              </LineChart>
            </div>
          </div>
        </div>
        {/* container ends */}
      </div>
    </>
  );
}
